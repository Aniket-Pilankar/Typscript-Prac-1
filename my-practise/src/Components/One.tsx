import React from 'react'

interface FullName {
    fullName:string
}

interface CircleProps {
    shape:'circle'
    radius:number
}

// interface SquareProps extends FullName {
interface SquareProps {
    shape:'square';
    width:number
}

interface RectangleProps {
    shape:' reactangle';
    width:number;
    height:number;
}

// interface OneProps extends CircleProps,SquareProps,RectangleProps {} WRONG



// type OneProps = {fullName:string} & (CircleProps | SquareProps | RectangleProps)
type OneProps = FullName & (CircleProps | SquareProps | RectangleProps)

// const One = (props:CircleProps | SquareProps | RectangleProps) => {
const One = (props:OneProps) => {
  return (
    <div>One</div>
  )
}

export default One