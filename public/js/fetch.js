let apUrl='http://server/read.php'

const GetSendRequest = async(apUrl) => {
    const response =  fetch(apUrl)
        .then(res =>res.json())
        .then(data => {
            document.getElementById('unix').innerHTML = data.unix
            document.getElementById('unix2').innerHTML = data.date})
}
    
GetSendRequest(apUrl)

