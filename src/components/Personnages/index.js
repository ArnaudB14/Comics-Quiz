// == Import npm
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

// == Import
import './style.scss';
import background from 'src/assets/img/deadpool-background-personnages.png';

// == Composant
export default function Personnages() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=f76e8ef5141f4aeb63824957fff15c65');
        setData(response);
        console.log(response.data.results)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <main className="personnages">
        <div className='personnages__background'>
          <img src={background} alt="Deadpool Background" />
        </div>
        {loading && <div>Loading</div>}
        {!loading && (
        <div className='personnages__container'>
          {data.data.results.map(item => (
            <li key={item.id} className="personnages__liste">{item.name}</li>
          ))}
        </div>
      )}
    </main>
  );
}
