
console.log("<table>");

let i=1;
while(i<=100){
  let n = i.toString();
  let name = n.padStart(3, "0"); 
  console.log("<tr >");
  console.log(`<td style='border-style: solid;'><a href='webpage1/${name}'>`);
  console.log(`<img src='img/${name}.png' width='640' />`);
  console.log(`${name}</a></td>`);
  console.log("</tr>");
  i++;



}

console.log("</table>");
