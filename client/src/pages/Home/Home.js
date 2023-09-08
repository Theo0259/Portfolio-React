import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// AXIOS
import axios from 'axios';


const Home = () => {

    // AXIOS
    const [data, setData] = useState([]);

    useEffect(() => {
        // Rechercher l'url
        axios.get('https://reqres.in/api/users')
            .then((res) => {
                // res = response, 1er data = le data de la const, là où on va chercher la data de l'api, 2ème data = je le créer pour l'appeler plus tard : de cette façon si je veux l'avatar j'irai chercher data.avatar.
                if (Array.isArray(res.data.data)) {
                    setData(res.data.data);
                    console.log(res.data.data);
                } else {
                    console.log('Les données ne sont pas reçues :', res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        // On met fin au useEffect avec le []);
    }, []);






    return (
        <div>Accueil</div>

    );
};

export default Home