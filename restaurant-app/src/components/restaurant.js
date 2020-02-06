import React, { useState } from 'react';
import { Blurhash } from "react-blurhash";

function Restaurant(props) {

    /**
     *  Element for focused restaurants. Contains the name, the picture, the description and the city
     *  of the restaurant.
     * */

    const sharp =
        <div className="sharpContainer">
            <p className="name">
                {props.name}
            </p>
            <img className="sharpImage"
                src={props.image}
                alt="Food"/>
            <p className="description">
                {props.description}
            </p>
            <p className="city">
                @ {props.city}
            </p>

        </div>

    /**
     * Element for blurred restaurants. Contains the name of the restaurant on top of the blurred image of the restaurant.
     * The blurred image is generated with react-blurhash by woltapp. For more details https://github.com/woltapp/react-blurhash.
     */
    const blur =
        <div className="blurredContainer">
            <Blurhash className="blurredImage"
                hash={props.hash}
                width={300}
                height={300}
            />
            <p className="blurredTitle">
                {props.name}
            </p>
        </div>

    // Current status of the restaurant. Is either 'sharp' or 'blur'.
    const [element, setElement] = useState(blur);

    function handleMouseEnter() {
        setElement(sharp)
    }

    function handleMouseLeave() {
        setElement(blur)
    }
    return (
        <div className="restaurantContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {element}
        </div>
    );
}

export default Restaurant;