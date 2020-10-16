import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarkerImg from '../images/Local.svg';
import '../styles/pages/orphanages-map.css'
import mapIcon from '../utils/mapicon';
import api from '../services/api';

// fetch('http://localhost:3333/orphanages')
//     .then(data => data.json())
//     .then(data => console.log(data.images))

interface Orphanages{
    id: number,
    latitude: number,
    longitude: number,
    name: string,
}

function OrphanagesMap(){
    const [orphanages,setOrphanages ] = useState<Orphanages[]>([])
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
            console.log(response.data)
        })
    }, [])


    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt=""/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Tamandaré</strong>
                    <span>Pernambuco</span>
                </footer>
            </aside>
            
            <Map 
                center={[-8.7499702,-35.093865]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />

                {orphanages.map(orphanage => {
                    return (

                    <Marker 
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                        key={orphanage.id}
                    >
                        <Popup closeButton={false} minWidth={240} maxwidth={240} className="map-popup">
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#fff" />
                            </Link>
                        </Popup>
                    </Marker>

                    )
                })}
            </Map>

            <Link to="/orphaneges/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;