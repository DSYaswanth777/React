import React from 'react'
import { PI, add, sub } from '../utills/utills'
import Greet from '../utills/Greet'
const user = "Swathi"
const score = 42
const isPassed = score>40
function ScoreCard() {
  return (
  <>
  
  <h1>ScoreCard</h1>
  <h2>Score: {score}</h2>
  <h2>Name: {user}</h2>
  <h2>Result : {isPassed ? "Pass" :"Fail"}</h2>

  <h3>Add of two Number {add(2,3)}</h3>
  <h3>Sub of two Number {sub(2,3)}</h3>
<h3>Value of PI {PI}</h3>
<Greet name="name"/>

Nmed Export vs Default export


Nmed Export
How to export export function Foo()

{/* import {fooo} from "./file" */}

In import statement we have {} 
We can per create/export unlimited of exports/modules in one file
Name Should match


Default export

export default Foo

{/* import Foo from "./file" */}

There are no curly braces

We can send export only one module per one file


  </>

  )
}

export default ScoreCard