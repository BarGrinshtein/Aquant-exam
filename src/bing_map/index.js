import {React, useEffect, useRef} from 'react';
import { ReactBingmaps } from 'react-bingmaps';

import './index.scss';


let map = null;
let markers  = [];


const BingMap = (props) =>{

  const map_ref = useRef();


  useEffect(()=>{
    window.GetMap = getMap;
  }, []);

  useEffect(()=>{
    const points = props.points;
    markers = [];
    if(map)
    map.entities.clear();

    if(window.Microsoft){
    points.forEach(point => {
        
        let location = new window.Microsoft.Maps.Location(point.lat, point.lng);
        //Create custom Pushpin
        let pin = new window.Microsoft.Maps.Pushpin(location, {});
        map.entities.push(pin);

        markers.push({pin, location});
    });

    console.log(markers);
    if(markers.lenght > 2){
      let exteriorRing = [];

       //Create array of locations to form a ring.
      exteriorRing.push(map.getCenter());
    markers.forEach(element => {
      exteriorRing.push(element.location);
    });
    exteriorRing.push(map.getCenter());

        //Create a polygon
        let polygon = new window.Microsoft.Maps.Polygon(exteriorRing, {
          fillColor: 'rgba(0, 255, 0, 0.5)',
          strokeColor: 'red',
          strokeThickness: 2
      });
  
      //Add the polygon to map
      map.entities.push(polygon);
    }
  }
  },[props]);




  const getMap = () =>{
    map = new window.Microsoft.Maps.Map(map_ref.current, {});
  }


    return(
        <div className="map-wrapper">
          <div id="map" ref={map_ref}></div>
        </div>
    );
};

export default BingMap;