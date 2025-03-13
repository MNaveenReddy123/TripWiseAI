import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip/index.jsx';
import Header from './components/custom/Header.jsx';
import { Toaster } from './components/ui/sonner.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './view-trip/[tripId]/index.jsx';
import MyTrips from './my-trips/index.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/create-trip',
        element: <CreateTrip />,
    },
    {
        path: '/view-trip/:tripId',
        element: <Viewtrip />,
    },
    {
        path: '/my-trips',
        element: <MyTrips />,
    },
]);

let setMapsLoadedGlobal; // Declare a global variable

function initMap() {
    setMapsLoadedGlobal(true); // Use the global variable
    const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}
window.initMap = initMap;

let mapsScriptLoaded = false; // Flag to track script loading

function loadMapScript() {
    if (mapsScriptLoaded) {
        return; // Script already loaded, do nothing
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&loading=async&libraries=places&callback=initMap`;
    script.async = true;
    script.onload = () => {
        mapsScriptLoaded = true; // Set flag when script is loaded
    };
    document.head.appendChild(script);
}

function Root() {
    const [mapsLoaded, setMapsLoaded] = useState(false);
    setMapsLoadedGlobal = setMapsLoaded; // Set the global variable

    loadMapScript();

    return (
        <React.StrictMode>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
                <Header />
                <Toaster />
                {mapsLoaded && <RouterProvider router={router} />}
            </GoogleOAuthProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);