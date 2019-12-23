async function getStars(result){
	//console.log("NO STARS!");
	var promises = [];
	result.prop("alternateNames").forEach((value, key) => {
      promises.push(value.link("star").fetch());
    })

    return await Promise.all(promises).then( async stars => {
      //console.log(stars);
      stars.forEach((star, index) => {
        //I'm changing the star's name to the search result name so that there are no duplicate names for the same star
        // stars[index].props.name = "matched name: " + result.prop("alternateNames")[index].prop("name") + ", canonical name: " + star.props.name; 
        stars[index].props.matchedName = result.prop("alternateNames")[index].prop("name");
      })
      // return new Promise((resolve, reject) => {
      	
      // });
      return stars;
      //stars = values;
      
    }).then( async (values, index) => {
      var proms = [];
      values.forEach((value, i) => {
        proms.push(value.link("additionalNames").fetch());
      })

       return await Promise.all(proms).then(namesArray => {
        namesArray.forEach((names, namesIndex) => {
          var namesToAdd = [];
          //additionalNames = [];
          names.prop("alternateNames").forEach(name => {
            //console.log(name.prop("name"));  
            namesToAdd.push(name.prop("name"));
          })
          //console.log(namesToAdd);
          values[namesIndex].props.additionalNames = namesToAdd;

        })
        return values;

      })
      })

}

async function getAdditionalNames(link){
	var aditionalNamesResource = await link.fetch();
	//console.log(aditionalNamesResource);
	var namesToAdd = [];

          
          //additionalNames = [];
          aditionalNamesResource.prop("alternateNames").forEach(name => {
            //console.log(name.prop("name"));  
            namesToAdd.push(name.prop("name"));
          })
          //console.log(namesToAdd);


		return namesToAdd;

}

function tempToRGB(temp, alpha) {
      if(temp==null) return;
      var ct = require('color-temperature');
      var color = ct.colorTemperature2rgb(temp);
      var red = color.red ? color.red : 0;
      var green = color.green ? color.green : 0;
      var blue = color.blue ? color.blue : 0;
      return "rgba("+red+","+green+","+blue+"," + alpha + ")";
    }

module.exports = {
	getStars: getStars,
	getAdditionalNames: getAdditionalNames,
	tempToRGB: tempToRGB
}

//export default getStars;