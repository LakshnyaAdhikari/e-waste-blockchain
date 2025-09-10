function fetchDeviceInfo() {
    const deviceId = document.getElementById('deviceId').value;
    fetch(`http://localhost:3000/device/${deviceId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('deviceInfo').innerText =
                JSON.stringify(data, null, 2);
        })
        .catch(err => {
            console.error(err);
            document.getElementById('deviceInfo').innerText = "Error fetching data.";
        });
}
