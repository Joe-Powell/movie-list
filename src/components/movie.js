import React from 'react';
import darkknight from '../images/dark-knight.jpg';
import bates from '../images/bates-motel.jpg';
import beautifulMind from '../images/beautifulMind.jpg';
import fightClub from '../images/fight-club.jpg';
import gladiator from '../images/gladiator.jpg';
import godzilla from '../images/godzilla.jpg';
import matrix from '../images/matrix.jpg';
import scarface from '../images/scarface.jpg';
import terminator from '../images/terminator.jpg';

const Movie = (props) => {

    let image ="";

        switch(props.name){
            case "Dark Knight":
                image= darkknight;
                break;
            case "Bates Motel":
                image= bates;
                break;
            case "The Terminator":
                image= terminator;
                break;
            case "Godzilla":
                image= godzilla;
                break;
            case "Matrix":
                image= matrix;
                break;
            case "Scarface":
                image= scarface;
                break;
            case "A Beautiful Mind":
                image= beautifulMind;
                break;
            case "Gladiator":
                image= gladiator;
                break;
            case "Fight Club":
                image= fightClub;
                break;
             default:
                 image="";   


        }

        let cover = {
            backgroundImage : 'url(' + image +')'
        }


return(
    <div className='movie-container'>
        <div className='movie-image' style={cover}> </div>
        <p className='movie-title'>{props.name}</p>
    <p className='movie-year'>{props.year}</p>
        </div>
    );




}


export default Movie;