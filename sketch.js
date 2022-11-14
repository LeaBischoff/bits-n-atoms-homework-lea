console.log('Loading data...');

let table;
let tempLable = ["40°","30°","20°","10°","0°"];



// https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated2.csv', 'csv', 'header');
}

function setup() {
  colorMode(HSB,100);
  createCanvas(windowWidth, windowHeight);
  background(50,80,10);

  const barMargin = 10;
  const barHeight = 30;

  // count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));
 


  // drawAxes();
  // drawAxesLabels();
}

function draw(){

drawThermometer();
drawScale();
drawCityTemp();
fill(100,100,100);

}

function drawThermometer(){
  let posY = 300;
  noFill();
  stroke(0,0,100);
  rectMode(CENTER);
  rect(windowWidth/2,posY,40,400,20);
  fill(60,70,100);
  noStroke();
  rect(windowWidth/2,posY,27,380,20);

}

function drawScale(){
  stroke(0,0,100);
  textSize(26);
  let steps = 90;
  push();
  translate(windowWidth/2+20,120)
  for(let i = 0; i < 5; i++){
    stroke(0,0,100);
    line(0,i*steps,60,i*steps);
    noStroke();
    fill(100,0,100);
    text(tempLable[i],80,i*steps+8);
  }
  pop();

}


function drawCityTemp(){

  //draw lines on thermometer
let city = table.getColumn('current_city');
let maxTemp = table.getColumn('Max_Temperature_of_Warmest_Month');
stroke(0,0,100);

 push();
 translate(windowWidth/2-30,480);
  for(let i = 0; i < city.length; i++){
    let posY = map(maxTemp[i],0,40,0,360);
    line(0,posY*-1,10,posY*-1);
    print(posY);
  }
  pop();
  
  //draw citynames
  for(let i = 0; i < city.length; i++){
    noStroke();
    let posY = map(maxTemp[i],0,40,0,360);
    textSize(20),
    text(city[i],400,50+i*50);
    stroke(0,0,100);
    line(windowWidth/2-30,480+posY*-1,500,50+i*50);
    
    //print(mouseX,mouseY);
  }
  noStroke();
  textSize(15);
  fill(0,0,100);
  text('Maximal temperature of the warmest month',900,650);
    // const min = Math.min(...maxTemp.values());
    // const max = Math.max(...maxTemp.values());
    
}

 