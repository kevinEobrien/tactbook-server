
require("dotenv").load();

function activateWatson (string){
  var result;
  var NaturalLanguageUnderstandingV1 = require("watson-developer-cloud/natural-language-understanding/v1.js");
  var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    version_date: "2017-02-27"
  });

  var parameters = {
    text: string,
    features: {
      categories: {}
    }
  };
  return new Promise((resolve, reject) => {
    natural_language_understanding.analyze(parameters, function(err, response) {
      if (err) {
        console.error("error:", err);
        return reject(err);
      }
      resolve(response);
    }); 
  });
}
module.exports= activateWatson;

// activateWatson("This is the worst government to ever rule the United States of America. Trump is terrible!")
//   .then(results => {
//     console.log("return value of watson is ", results);
//   })
//   .catch(err => {
//     console.error("Error:", err);
//   });