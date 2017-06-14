SunInformed
=======

SunInformed was a week 9 group project at Makers Academy, where a team of four students spent five days learning React Native and then building an iPhone app to alert users to upcoming sunny weather in London.

<img width="374" alt="screen shot 2017-06-14 at 17 57 23" src="https://user-images.githubusercontent.com/20523607/27144764-0a649bfe-512b-11e7-8a17-c354b7e6dbbd.png">

Installation & Testing
--------

* Fork or clone this repo, and run `npm install`. 
* Download Xcode from the Apple Store and use its built-in iPhone simulator by entering `react-native run-ios` on the command line.
* Tests can be run with `npm test`

Features
--------

* Obtains 21-day forecasts from the worldweatheronline.com API
* Shows mobile users a dynamic list of upcoming days where London is expecting sunny weather and a temperature above 15C.

Technologies & Principles
-------------------------

* JavaScript
* React Native
* Jest
* Enzyme

Our Approach
------------

After deciding that we wanted to make a mobile app, we set about learning about the different technologies we could use to make our idea a reality. Our research revealed React Native to be a really popular choice for those who want to write 'native' apps for different platforms with a single codebase. We liked the idea that our app could have the flexibility to end up working on both Android and iOS, and that RN had a basis in JavaScript, a language we already had a grasp of. 

We began by educating ourselves on the basics of the language - none of us had ever touched RN - and discussed our ideas for exactly what features we would want our app to have. Our initial concept was for an app that allowed a user to enter a location, weather preferences (e.g. sunny or rainy weather, or temperature thresholds), and to select one-off or repeating dates that they wanted notifications for. The app would then alert them when a new forecast became available that matched these criteria. 

We envisaged three 'views' - one for users to create new alerts, another to view all alerts set up by the user, and another that would list the details of any 'matches' the app made between those alerts and incoming weather data.

![dsc_0096](https://user-images.githubusercontent.com/20523607/27144620-7af4af7c-512a-11e7-9a35-1196b303dcb8.JPG)

Aside from the predictable difficulties of working in an unfamiliar language, we hit particular issues with asynchronicity when making requests to our weather API, and making use of a testing library, Enzyme, whose latest version was silently incompatible with the latest version of another of our libraries. 

As it became clear that we were unlikely to have enough time to implement all the original features we envisaged, we decided to aim for a simpler MVP - a nicely-styled app that would notify users about all upcoming sunny days in London. This ensured we could get some useful functionality before tackling more expansive issues such as persisting the data from alerts.

Further Development
-------------------

* Allow users to specify location, weather and date criteria by persisting preferences in a database.
