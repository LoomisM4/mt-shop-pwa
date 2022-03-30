import React, { useEffect, useState } from 'react';

export default function MapUI() {
    const [errorText, setErrorText] = useState("")

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(locationReceived, errorGettingLocation, {
                enableHighAccuracy: true
            })
        }
    }, [])

    if (errorText != null && errorText.length > 0) {
        return <div>{errorText}</div>
    } else {
        return (
            <div>
                TODO Karte
            </div>
        )
    }

    function locationReceived(location) {
        console.log(location.coords.latitude)
        console.log(location.coords.longitude)
    }

    function errorGettingLocation(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
            setErrorText("Keine Berechtigung für die Standortabfrage")
            break;
        case error.POSITION_UNAVAILABLE:
            setErrorText("Standort nicht verfügbar")
            break;
        case error.TIMEOUT:
            setErrorText("Standortermittlung dauert zu lange")
            break;
        default:
            setErrorText("Unbekannter Fehler")
            break;
        }
    }
}