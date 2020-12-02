# WeightConverter

This is a site to allow you to convert pounds to other common weights.

The main.js has comments for what each function does but below is a list of each class and what it's functions are for.

Live Demo: https://www.thomassapp.com/WeightConverter

## Classes

### UI Class

Provides helper functions for accessing and controlling the UI.

* UI.initialize = Initializes the controls on the UI to their default values.
* UI.convertWeight = Converts the inputed number of pounds to the various other weight measurements.

## Events

* Initalize UI

    document.addEventListener('DOMContentLoaded', UI.initalize);

* Display weight conversions

    document.querySelector('#weightInput').addEventListener('input', UI.convertWeight);