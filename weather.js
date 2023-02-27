function weatherAccess()
{
    cityName=location.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(take=>take.json()).then(send=>recieveDetails(send))
}
function recieveDetails(recve)
{
    console.log(recve);
}