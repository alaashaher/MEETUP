function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function myFunction() {
        var email;

        email = document.getElementById("textEmail").value;

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(textEmail.value) == false) {
              alert("invalid email");
              return false;
            } 
       return true;
}

function clearContents(element) {
  element.value = '';
}

var remove_element = document.getElementById("remove_calss");
if(navigator.userAgent.indexOf("Firefox") != -1 ) {
         remove_element.classList.remove("time3");
}