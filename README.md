# Tangent - 3D Graphing Calculator

## Inspiration
Whenever we want a graphing calculator, the go-to site is generally [Desmos](https://desmos.com/).
This year, I took Analysis at school, and during class, we often had to graph in 3D.

It was a struggle to find a good tool to do this job - Desmos doesn't support 3D graphs! Students with
Apple computers (like me) could use a native application called Grapher, but that was limited to operating system.
It made me wonder why such a tool is so difficult to find - was it that people didn't know how to do it,
or was it too complex or uninteresting of a project?

For this hackathon, I decided to find out for myself by devoting these 36 hours to building a 3D graphing calculator
using the knowledge and resources that I had.

## What it does
Tangent is a lot like Desmos, but 3D. It takes in a function `f` on `x` and `y`, and renders a 3D graph representing `z=f(x,y)`.

 

## How we built it

Tangent is built using [Nuxt.js](https://nuxtjs.org/), which is an extension of [Vue.js](https://vuejs.org), a popular and new Javascript framework. 
This allows the application to (almost!) seamlessly react to changes and events. For typing math it uses
[MathQuill](https://mathquill.com/), which creates textboxes that the user can intuitively type LaTeX rendered math into.
This is also used by Desmos. The most important part of the application is the computation and rendering.

To compute samples of the function, Tangent uses a library called [MathJS](https://mathjs.org) to parse the user 
input into a function and evaluate it. Tangent then evaluates the function at intervals of `0.1` from -10 to 10,
and passes the coordinates to [Three.js](https://threejs.org), a Javascript 3D rendering library which uses WebGL behind the scenes.

Polylines are drawn "parallel" to the x and y axes, tracing out the shape of the graph. The results look smooth and accurate to the human eye!

## Challenges we ran into

Currently, the app is a bit slow, likely because of the amount of computation it does for each graph. I've tried to combat this with caching, but unfortunately the amount of data needed to graph each function is quite large, and the browser is only able to cache up to 3 functions at a time.

Many times, there were compatibility issues between Nuxt.js and other modules, but they were solved by perserverance and reading Stack Overflow articles.


## Accomplishments that we're proud of

One of my achievements with Tangent is that it's able to use readily available tools on the web to create something 
that isn't as readily available.

I'm proud that I was able to integrate Three.js into Nuxt, and create a reactive and interactive 3D model.

Most of all, I'm proud that I was able to take an idea and turn it into a reality, over the course of just a weekend!

## What we learned

I learned a lot about Three.js and I have gained some motivation to use it more in future projects.
I learned that a lot can be done if you focus on not reinventin the wheel, but modifying existing ones. This project 
was a lot like pottery; I had to put many models together and then smoothen the boundaries between them to make everything seamless.

## What's next for Tangent - 3D Graphing Calculator

I intend to keep working on Tangent! Here's a tentative roadmap for the project:

* Find an efficient way to cache data or reduce compute time
* Reduce lag between user input and render
* Allow the user to select points within the graph, as in Desmos
* Support complex valued functions
* and more!
