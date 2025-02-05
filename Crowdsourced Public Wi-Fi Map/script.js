function loadWiFiSpots(map) {
  fetch("wifi-spots.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(spot => {
        const marker = new google.maps.Marker({
          position: { lat: spot.latitude, lng: spot.longitude },
          map: map,
          title: spot.name,
          icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" // Custom marker
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<h3>${spot.name}</h3><p>Status: ${spot.status}</p>`
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    })
    .catch(error => console.error("Error loading Wi-Fi spots:", error));
}

