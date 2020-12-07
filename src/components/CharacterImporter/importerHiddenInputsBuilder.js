//Build a list of input which the user can edit manually if needed
//This shows how all their data is going to be imported onto the sheet
const importerHiddenInputsBuilder = update => {
  let setText = {
    "hidden": ""
  };

  //GENERATE INPUTS TO SAVE THE DATA
  Object.keys(update).forEach(key => {
    const replaceUnderscoreWithSpace = word => word.replace(/_/g, ' ')
    const label = (key.includes("_")) ? replaceUnderscoreWithSpace(key) : key;
    const input = `
      <label>
      <div>${label}</div>
      <input type="text" name="comp_${key}" value="${update[key]}" />
      </label>
    `;
    setText[`hidden`] += (setText[`hidden`].includes(input)) ? "" : input;

    const feedbackLabel = 
      (key.includes("repeating")) ? key.split("_")[3] : 
      (key.includes("_")) ? replaceUnderscoreWithSpace(key) : 
      key;

    (feedbackLabel === "flag" || feedbackLabel === "display") ? 
      false : 
      setText["results"] += addFeedback(feedbackLabel, update[key]);
  });

  return setText;
}

