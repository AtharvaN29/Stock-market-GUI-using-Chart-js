
const Graph1 = [];
const Label1=[];
const Graph2 = [];
const Label2=[];

const data={
  labels:Label1,
  datasets:[{
    label: 'High Stocks',
    data:Graph1,
    borderWidth: 1
  }]
};

const config={
  type: 'line',
  data,
  options:{
    scales:{
      y:{
        beginAtZero: true
      }
    }
  }
};


const myChart=new Chart(
  document.getElementById("TempGraph"),
  config
);

const myChart1=new Chart(
  document.getElementById("PressureGraph"),
  config
);

function setTime() {
  const time = new Date();
  let upto = 0;
  document.getElementById("TimeHRS").innerHTML = time.getHours();
  document.getElementById("TimeMIN").innerHTML = time.getMinutes();
  document.getElementById("TimeSEC").innerHTML = time.getSeconds();
}

setInterval(setTime, 1000);

let counts = setInterval(updated,100);
let upto = 0;
function updated() {
  let count = document.getElementById("PacketCount");
  count.innerHTML = ++upto;
}


let i=1,j=1;
Label1.push(i);
Graph1.push(j);
myChart.update();
myChart1.update();
function graphReload(){
  Label1.push(i);
  Graph1.push(Math.floor(Math.random() * 10));
  myChart.update();
  myChart1.update();
  ++i;
}

setInterval(graphReload,2000);