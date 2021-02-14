import latex_to_js from "./latex-to-js"
import { evaluate, parse, simplify, complex, min, max } from "mathjs"
import * as assert from "assert"

export default function brutePoints(latex, step=0.1) {
  // we assume the bounds to be -4, 4 and the y bounds to be the same
  console.log("================",latex,"================")
  // check if its saved
  try{
    const saved = localStorage.getItem(latex);
    if (saved) return JSON.parse(saved);
  }
  catch (e){

  }

  let input;
  let f
  try {
    input = latex_to_js(latex)
    f = simplify(parse(input))
    let tester = f.evaluate({ x: 0, y: 0 }) // lol just bear with me
    assert(latex)
  } catch (e) {
    return []
  }
  // making 2 arrays, one goes on x and one goes on y
  const length = Math.round(21/step);
  //console.log(length)
  let xarray = Array.from({ length }, () => [])
  let yarray = Array.from({ length }, () => []);
  //const points = []
  let yc = 0;
  let xc = 0;
  for (let y = -10; y <= 10; y+=step) {
    for (let x = -10; x <= 10; x+=step) {
      const z = f.evaluate({ x, y })
      if (z <= 10 && z >= -10) {
        //points.push([x, y, z]) // only if vertically present within bounds
        //console.log("x",x+10, [x,y,z]);
        //console.log("y", y+10,[x,y,z]);
        try {
          xarray[xc].push([x, y, z])
          yarray[yc].push([x, y, z])
        }
        catch (e){
          //console.debug(xc, yc)
        }

      }
    xc++;
    }
    xc=0
    yc++;
  }
  try {
    localStorage.setItem(latex, JSON.stringify([xarray, yarray]))
  }
  catch (e) {

  }
  return [xarray, yarray]
}

//console.log(brutePoints("x+y"))
