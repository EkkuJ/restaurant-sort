import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './../restaurant';

it("renders without crashing", () =>{

    const div = document.createElement("div");
    ReactDOM.render(<Restaurant className="test"
    key="test"
    name="test"
    image="test"
    hash="UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0"
    description="test"
    city="test"/>
    , div);
});