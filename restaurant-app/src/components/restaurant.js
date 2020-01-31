import React, { useState } from 'react';
import { Blurhash } from "react-blurhash";

function Restaurant(props) {

    const sharp =
        <div className="sharpContainer">
            <p className="name">
                {props.name}
            </p>
            <img className="sharpImage"
                src={props.image}
                alt="Image of food" />
            <p className="description">
                {props.description}
            </p>
            <p className="city">
                @ {props.city}
            </p>

        </div>


    const blur =
        <div className="blurredContainer">
            <Blurhash
                hash={props.hash}
                width={300}
                height={300}
            />
            <p className="blurredTitle">
                {props.name}
            </p>
        </div>

    const [image, setImage] = useState(blur);

    function handleMouseEnter() {
        setImage(sharp)
    }

    function handleMouseLeave() {
        setImage(blur)
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="restaurantContainer">
                {image}
            </div>
        </div>
    );
}

export default Restaurant;