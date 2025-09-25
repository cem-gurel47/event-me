import { useEffect, useState } from "react";
import { useStore } from "~/store/store";

const DEFAULT_CENTER = {
  latitude: 51.505,
  longitude: -0.09,
};

export function Map() {
  const [isClient, setIsClient] = useState(false);
  const [MapComponent, setMapComponent] = useState<any>(null);
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const { selectedEvent } = useStore();

  // Get user's current location on component mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(position.coords);
      },
      (error) => {
        console.warn("Could not get user location:", error);
      }
    );
  }, []);

  // Update position when selectedEvent changes
  useEffect(() => {
    if (selectedEvent) {
      setPosition(selectedEvent.coordinates);
    }
  }, [selectedEvent]);

  useEffect(() => {
    setIsClient(true);

    // Dynamically import the map components only on the client side
    import("react-leaflet").then((leaflet) => {
      const { MapContainer, Marker, Popup, TileLayer } = leaflet;
      setMapComponent(() => (
        <MapContainer
          center={[
            position?.latitude || DEFAULT_CENTER.latitude,
            position?.longitude || DEFAULT_CENTER.longitude,
          ]}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-[650px] rounded-lg"
          key={`${position?.latitude}-${position?.longitude}-${selectedEvent?.id}`}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[
              position?.latitude || DEFAULT_CENTER.latitude,

              position?.longitude || DEFAULT_CENTER.longitude,
            ]}
          >
            <Popup>
              {selectedEvent ? (
                <>
                  <strong>{selectedEvent.name}</strong>
                  <br />
                  {selectedEvent.description}
                </>
              ) : (
                "Current location"
              )}
            </Popup>
          </Marker>
        </MapContainer>
      ));
    });
  }, [position, selectedEvent]);

  if (!isClient || !MapComponent) {
    return (
      <div className="w-full h-[650px] bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return MapComponent;
}
