//https://www.codewars.com/kata/5ab6538b379d20ad880000ab Area or Perimeter
//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = (l , w) =>{
    if(l <= 0 || w <= 0 )return "wrong"
    if(l === w){
        return l * w
}   else {
        return (l + w) * 2
}
   }
   console.log(areaOrPerimeter(-7, 7))