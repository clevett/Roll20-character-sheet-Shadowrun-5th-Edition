	// APPLY Changes
	on("clicked:import_launch", () => startCharactermancer("importer"))
	
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
