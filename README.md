Switches
===========

Browser-based light switching game.

Gameplay
--------

* This is a singleplayer game
* The game board consists of a 5 by 5 grid of lights
* When the game starts, a pattern of these lights is switched on, based on a randomly selected starting pattern
* Pressing any of the lights will toggle it **and** the four adjacent lights (top, right, bottom, left)
* The goal of the game is to switch all the lights on
* The amount of button presses is used as the metric of the gamer's performance

Example
-------

The game board might start as following:

```
column:   0   1   2   3   4
row:    ┌───┬───┬───┬───┬───┐
   0    │   │   │   │   │   │       x = light is on
        ├───┼───┼───┼───┼───┤
   1    │   │ x │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   2    │   │ x │   │ x │   │
        ├───┼───┼───┼───┼───┤
   3    │   │ x │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   4    │   │   │   │   │   │
        └───┴───┴───┴───┴───┘
```

The user presses the field `2,1` (row 2, column 1), this toggles all adjacent lights:

```
          0   1   2   3   4
        ┌───┬───┬───┬───┬───┐
   0    │   │   │   │   │   │
        ├───┼───┼───┼───┼───┤
   1    │   │   │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   2    │ x │   │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   3    │   │   │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   4    │   │   │   │   │   │
        └───┴───┴───┴───┴───┘
```

The user may also press a field on the edge which will also toggle the adjacent lights, e.g. `0,0`:

```
          0   1   2   3   4
        ┌───┬───┬───┬───┬───┐
   0    │ x │ x │   │   │   │
        ├───┼───┼───┼───┼───┤
   1    │ x │   │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   2    │ x │   │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   3    │   │   │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   4    │   │   │   │   │   │
        └───┴───┴───┴───┴───┘
```

A full board is the goal of the game:

```
          0   1   2   3   4
        ┌───┬───┬───┬───┬───┐
   0    │ x │ x │ x │ x │ x │
        ├───┼───┼───┼───┼───┤
   1    │ x │ x │ x │ x │ x │
        ├───┼───┼───┼───┼───┤
   2    │ x │ x │ x │ x │ x │
        ├───┼───┼───┼───┼───┤
   3    │ x │ x │ x │ x │ x │
        ├───┼───┼───┼───┼───┤
   4    │ x │ x │ x │ x │ x │
        └───┴───┴───┴───┴───┘
```

Starting patterns
-------------

The game should start choosing one of the following patterns randomly:


```
          0   1   2   3   4
        ┌───┬───┬───┬───┬───┐
   0    │   │   │   │   │   │
        ├───┼───┼───┼───┼───┤
   1    │   │ x │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   2    │   │ x │   │ x │   │
        ├───┼───┼───┼───┼───┤
   3    │   │ x │ x │ x │   │
        ├───┼───┼───┼───┼───┤
   4    │   │   │   │   │   │
        └───┴───┴───┴───┴───┘

          0   1   2   3   4
        ┌───┬───┬───┬───┬───┐
   0    │ x │   │   │   │ x │
        ├───┼───┼───┼───┼───┤
   1    │   │ x │   │ x │   │
        ├───┼───┼───┼───┼───┤
   2    │   │   │ x │   │   │
        ├───┼───┼───┼───┼───┤
   3    │   │ x │   │ x │   │
        ├───┼───┼───┼───┼───┤
   4    │ x │   │   │   │ x │
        └───┴───┴───┴───┴───┘

          0   1   2   3   4
        ┌───┬───┬───┬───┬───┐
   0    │   │   │ x │   │   │
        ├───┼───┼───┼───┼───┤
   1    │   │ x │   │ x │   │
        ├───┼───┼───┼───┼───┤
   2    │ x │   │ x │   │ x │
        ├───┼───┼───┼───┼───┤
   3    │   │ x │   │ x │   │
        ├───┼───┼───┼───┼───┤
   4    │   │   │ x │   │   │
        └───┴───┴───┴───┴───┘
```


Target design
-------------

![Design 1](https://cdn.jsdelivr.net/gh/neopoly/switches-vanilla@master/doc/design-1.png)

![Design 2](https://cdn.jsdelivr.net/gh/neopoly/switches-vanilla@master/doc/design-2.png)

![Design 3](https://cdn.jsdelivr.net/gh/neopoly/switches-vanilla@master/doc/design-3.png)

Environment
-----------

* [NodeJS](https://nodejs.org) (Version 10.x)

Setup
-----

* Fork this project into your GitHub account
* Clone your fork to your machine
* In project folder:
  * `npm install`


Run, test, build
----------------

* Start dev server: `npm start`
* To run the application open `http://localhost:8080/webpack-dev-server/`
* To run tests open `http://localhost:8080/webpack-dev-server/test`
* (Build release version to ./release: `npm run-script webpack`)

Technologies used
-----------------

* [Webpack](https://github.com/webpack/webpack) for asset bundling
* [Sass](http://sass-lang.com/) for CSS preprocessing
* [Mocha](http://mochajs.org/) as test runner and [Chai](http://chaijs.com/) as assertion library
