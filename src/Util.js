async function getStars(result){
	var promises = [];
	result.prop("alternateNames").forEach((value) => {
      promises.push(value.link("star").fetch());
    })

    return await Promise.all(promises).then( async stars => {
      stars.forEach((star, index) => {
        stars[index].props.matchedName = result.prop("alternateNames")[index].prop("name");
      })
      return stars;
      
    }).then( async stars => {
      var promises = [];
      stars.forEach(star => {
        promises.push(star.link("additionalNames").fetch());
      })

	    return await Promise.all(promises).then(namesArray => {
	      namesArray.forEach((names, namesIndex) => {
	        var namesToAdd = [];
	        names.prop("alternateNames").forEach(name => { 
	          namesToAdd.push(name.prop("name"));
	        })
	        stars[namesIndex].props.additionalNames = namesToAdd;
	      })
	      return stars;
	    })
    })

}

async function getAdditionalNames(link){
	var aditionalNamesResource = await link.fetch();
	var namesToAdd = [];

  aditionalNamesResource.prop("alternateNames").forEach(name => {
    namesToAdd.push(name.prop("name"));
  })

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

export { getAdditionalNames, tempToRGB, getStars };
// module.exports = {
// 	getStars,
// 	getAdditionalNames,
// 	tempToRGB
// }