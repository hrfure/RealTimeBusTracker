# RealTimeBusTracker
The project tracks a set of buses in Boston in real time as they move through the city

This code offers an interactive map that displays real-time locations of buses and updates their positions at regular intervals.

**Features:**

Uses Mapbox GL JS for rendering an interactive map.
Asynchronously fetches bus location data from the MBTA API every 15 seconds for real-time updates.
Dynamically adds or updates markers based on bus locations.
Uses distinct icons (red.png or blue.png) for buses based on their direction.

**Usage:**
In order to use this you will have to attain your own API key for Mapbox GL
The map will automatically populate with bus markers upon loading.
Buses with a direction ID of 0 will be represented by a red icon while others will be represented by a blue icon.

**Future Improvements:**
Future improvements could be to include the busstops that the buses will pass by on their route. Or more advanced to connect the real time data with a geolocator and estimate when the bus will be at the various stops (or your location). 

**Dependencies:**
MIT educational license for the real time data.
Mapbox GL JS v1.11.0: For rendering the interactive map.
Make sure red.png and blue.png images are available in the root directory or adjust the path as necessary.
Note: Ensure you're adhering to the usage limits and terms of service of both Mapbox and MBTA APIs when deploying or scaling this application.







