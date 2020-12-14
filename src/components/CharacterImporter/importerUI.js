// CHARACTERMANCER IMPORTER

	const buildDirectionsString = characterSoftware => {
		const chummerDirections = `
		<li>In Chummer mark your character as created</li>
		<li>Go to File -> Export -> Export JSON</li>
		<li>Copy the JSON in the file</li>`

		const herolabDirections = `
			<li>Export your character from Hero Lab as XML</li>
			<li>Go to the website 
				<input style='width:45%' type='text' value='https://codebeautify.org/xmltojson' />
			</li>
			<li>Copy the XML into the left side</li>
			<li>Click the button that says "<b>XML to JSON</b>"</li>
			<li>Copy the Results</li>
		`

		const directions = `
		<ol>
			${characterSoftware === "Chummer" ? chummerDirections : herolabDirections}
			<li>Paste it into the textfield below</li>
			<li>Click the Import button</li>
			<li>Move to the Results section below</li>
		</ol>
		`

		return directions
	}

	const buildNotesString = characterSoftware => {
		const chummerNotes = `
			<h3>Chummer Notes</h3>
			<ul>
					<li>
						Chummer frequently has the wrong information for <strong>Weapons</strong>. Review them in the Arms tab after clicking apply.
					</li>
					<li>
						<strong>specialization</strong> will not be applied to Weapons or Magic. You will need to manually update the checkbox.
					</li>
			</ul>
		`
		const herolabNotes = `
			<h3>Hero Lab Notes</h3>
			<ul>
				<li>
					Drugs and other effects are not accounted for. They will be applied to your base attributes.
				</li>
				<li>
					Weapon skills will not be set. You need to set the right skill in the arms tab.
				</li>
				<li>
					Weapons do not set ammo. You need to set the ammo capacity in the arms tab.
				</li>
				<li>
					This will overwrite some data but not all. Be sure to review the character after.
				</li>
			</ul>
		`

		return characterSoftware == "Chummer" ? chummerNotes : herolabNotes
	}

	on("page:importer", () => {
		const defaultBuilder = "Hero Lab"
		setAttrs({builder: defaultBuilder});
		setCharmancerText({	"directions" : buildDirectionsString(defaultBuilder)	})
	});

	on("clicked:import", () => {
		const mancerData = getCharmancerData();
		const mancerValues = mancerData["importer"].values;
		let applyEnabled = true;
	  let setText = {};

		// Verify the user entered a JSON in the textarea. If not, provide user feedabck.
		if (mancerValues.jsonData) {
			const parsedData = JSON.parse(mancerValues.jsonData) || false;

			setText[`import-feedback`] = "";
			// There is a value in the textarea! Check to see if its a valid JSON. Provide users feeadback 
			if (parsedData) {
				setText[`import-feedback`] += `<p class="feedback">A valid JSON was pasted into the importer for ${mancerValues.builder}.</p>`
				// Send the parsed data to the selected importer or let users know something went wrong 
				if (mancerValues.builder && mancerValues.builder === "Chummer") {
					if (parsedData.characters && parsedData.characters.character) {
						importChummer(parsedData.characters.character);
					} else {
						setText[`import-feedback`] += `<p class="warning">Parsed JSON is missing character data. Was this a exported from Chummer?</p>`;
						applyEnabled = false
					}
				} else if (mancerValues.builder && mancerValues.builder === "Hero Lab") {
					if (parsedData.document && parsedData.document.public && parsedData.document.public.character) {
						importHeroLab(parsedData.document.public.character);
					} else {
						setText[`import-feedback`] += `<p class="warning">Parsed JSON did not have the expected object keys. Was this converted with "Minify json" from Beautify Tools ?</p>`;
						applyEnabled = false
					}
				} else {
					setText[`import-feedback`] += `<p class="warning">A character builder was not selected. Try changing your selection then change it back if needed.</p>`;
					applyEnabled = false
				}
			} else {
				setText[`import-feedback`] += `<p class="warning"><span>The text imported is not a valid JSON. Verify the JSON is formatted correctly. Check the format at,</span> JSONLint.com.</p>`;
				applyEnabled = false
			};
		} else {
				setText[`import-feedback`] = `<p class="warning">No information was entered in the JSON text area.</p>`;
				applyEnabled = false
		};

		let buttonStatus = (applyEnabled) ? "" : "disabled";
		setText[`finish-button`] = `<button class="finish" type="finish" value="apply" data-i18n="apply" ${buttonStatus}>Apply</button>`;

		setCharmancerText(setText);
	});

	on("mancerchange:builder", eventinfo => setCharmancerText({
		directions : buildDirectionsString(eventinfo.newValue),
		notes: buildNotesString(eventinfo.newValue)
	}))

  const clean = () => {
    ['active', 'knowledge', 'language', 'quality', 'martial',
      'range', 'melee', 'weapon', 'armor', 'augementations',
      'items', 'NPCspell', 'spell', 'rituals', 'preps', 'powers',
      'contacts', 'vehicle', 'lifestyle', "programs", "forms"].forEach(group => {
      getSectionIDs(`repeating_${group}`, ids => ids.forEach(id => removeRepeatingRow(`repeating_${group}_${id}`)))
    });
  };

	//USEFUL FUNCTIONS
	const capitialize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

	const addFeedback = (attribute, value) => `<p class="feedback"><strong>${capitialize(attribute)}:</strong> ${value} </p>`

	const alphabatizeKeys = (unsortedJSON) => {
		let alphabeticalKeys = {};
		Object.keys(unsortedJSON).sort().forEach((key) => {
			  alphabeticalKeys[key] = unsortedJSON[key];
		});
		return alphabeticalKeys
	};

	const getValInParen = value => value.split("(")[1].split(")")[0];

	const getArray = array => Array.isArray(array) ? array : [ array ]

	const getSplitNum = value => value.split("/")[0]
	
	const checkForModifiedAttribute = value => value.includes("/") ? getSplitNum(value) : value

	