import latex_to_js from './latex-to-js';
import {
  evaluate, parse, simplify, complex, min, max
} from 'mathjs'
import * as assert from 'assert'
export default function generatePoints(latex){
  // we assume the bounds to be -4, 4 and the y bounds to be the same
 const input = latex_to_js(latex);
 let f;
 try {
   f = (simplify(parse(input)))
   let tester = f.evaluate({x:0}) // lol just bear with me
   assert(latex);

 }
  catch (e){
   return []
  }
 return computeRange(f, -4, 4)
}

function computeRange(f, a,b){ // return the points between which the function is defined
  let e = [f.evaluate({x:a}), f.evaluate({x:b})];
  //e = [min(e),max(e)];
  let m;
  try {
    m = [isReal(e[0]), isReal(e[1])];
  }
  catch (e){
    return []; // the function itself is invalid
  }
  let g = [...e,...m ]; // this is the representation Timothy was showing me
  // now we have to check up on m:
  // if both true, return the range to be OK
  if (m[0] && m[1]) return [[a,b]];
  // if both false, return the range to be bad
  if (!m[0] && !m[1]){
    return [];
  }
  // if unsure, split down the middle and be recursive.
  return [...computeRange(f, a, ((a+b)/2)-Number.EPSILON),...computeRange(f, (a+b)/2, b)]
}

function isReal(x){
  const a = complex(x);
  return a.im===0
}
