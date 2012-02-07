function find(){
    function success(position){
        var status = document.querySelector('#status');
        var lat = document.querySelector('latitude');
        var lon = document.querySelector('longitude');

        status.innerHTML = 'found you!';
        lat.innerHTML = position.coords.latitude;
        lon.innerHTML = position.coords.longitude;
    }

    function fail(error){
        var status = document.querySelector('#status');
        var msg = '';
        
        if(typeof error == 'string')
            msg = error;
        else
            msg = 'error code:'+error.code;
        
    }

    var option = {
        'enableHighAccuracy':true,
        'timeout':10000,
        'maximumAge':0
    };

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, fail, option);
    }else fail('not found');
}
