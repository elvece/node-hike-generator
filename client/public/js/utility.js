//JS Utility file - helper functions

//create question on DOM using index from quiz array
function createQuestion (index){//change name to renderQuestion***
  quizArr[index].render();
}

//will return the unique id of chosen hike
function getResults(){

    // question 1, option 1
    if (selections[0] === "0"){

      if (selections[1] === "1"){
        return 3;
      }
      if (selections[1] === "2"){
        return 6;
      }
      if (selections[1] === "3"){
        return 8;
      }
    }
    //question 1, option 2
    if (selections[0] === "1"){

      if (selections[1] === "0"){
        return 2;
      }
      if (selections[1] === "1"){
        return 4;
      }
      if (selections[1] === "2"){
        return 9;
      }
    }
    //question 1, option 3
    if (selections[0] === "2"){

      if (selections[1] === "0"){
        return 1;
      }
      if (selections[1] === "1"){
        return 5;
      }
      if (selections[1] === "2"){
        return 7;
      }
    }
}


function getHikeInfo(num){
  for (var i = 0; i < hikeArr.length; i++) {
    if (hikeArr[i].uuid === parseInt(num)){
      return hikeArr[i];
    }
  }
}

//map initalize
function initialize() {
  var results = getHikeInfo(getResults());
  var mapCanvas = document.getElementById('map');
  var latitude = results.map[0];
  var longitude = results.map[1];
  var latLng = new google.maps.LatLng(latitude, longitude);
  var mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: results.name  });
}
