import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet'
const { BaseLayer } = LayersControl;
import "leaflet/dist/leaflet.css"
export default () => {
    return (
        <>
            <div className='w-screen h-[75vh] flex justify-center items-center'>
                <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={false} className="w-1/2 h-full">
                    <LayersControl>
                        <BaseLayer checked name="Province">
                            <TileLayer
                                url="https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}"
                            attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                        </BaseLayer>
                        <BaseLayer name="District">
                            <TileLayer
                                url="https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}"
                            attribution=""
                            // maxNativeZoom={8}
                            />
                        </BaseLayer>
                        <BaseLayer name="Municipality ">
                            <TileLayer
                                url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
                            // attribution="&copy; NASA Blue Marble, image service by OpenGeo"
                            // maxNativeZoom={8}
                            />
                        </BaseLayer>
                    </LayersControl>
                </MapContainer>
            </div>
        </>
    )
}