	//IMPORTERS
	
	//temporary force open
	on('sheet:opened', () => startCharactermancer("importer"))
	
	// Start importer
	on("clicked:import_launch", () => startCharactermancer("importer"))
	
	// APPLY Changes
	on("mancerfinish:apply", () => {
		const mancerData = getCharmancerData();
		const mancerValues = mancerData["importer"].values;

		Object.keys(mancerValues).forEach((key) => {
			if (key == "builder" || key == "jsonData" || key == "hidden") {
				delete mancerValues[key];
			};
		});

    	clean();
		setAttrs(mancerValues, () => {
			deleteCharmancerData(["importer"]);
			finishCharactermancer();
		});
	}); 
