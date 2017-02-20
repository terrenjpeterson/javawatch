exports.handler = (event, context, callback) => {
    // Event is passed in to the function from Rekognition
    labels = event.Labels;
    var beansFound = false;
    
    // check all of the labels provided, and set boolean to true if Beans are found
    for (i = 0; i < labels.length; i++) { 
        console.log(JSON.stringify(labels[i]));
        if (labels[i].Name == "Bean") {
            beansFound = true;
        }
    }
    // return boolean if beans were found in the labels for the image
    callback(null, beansFound);
};
