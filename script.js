const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Weekly Sales',
    data: [18, 12, 6, 9, 12, 3, 9],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

function updateChart(barvalue) {
    console.log(barvalue.value)
    myChart.config.data.datasets[0].data.push(barvalue.value);
    myChart.config.data.datasets[0].data.shift();
    myChart.update();
}
function updateLabel(labelname){
  myChart.config.data.datasets[0].label = labelname.value;
  myChart.update();
}




































// ================================================================== //
// Chart I: Type: Bar & Line
// ================================================================== //
/* let data1 = {
    labels: labels,
    datasets: [{ 
        labels: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataValue,
    },{ 
        labels: 'My Second dataset',
        backgroundColor: 'rgb(255, 255, 0)',
        borderColor: 'rgb(255, 255, 0)',
        data: [0, 10, 15, 12, 20, 30, 45],
    }]
}; 

//render 
let Line = document.getElementById("LineChart").getContext('2d') ;
let LineChart = new Chart (Line,
    {type: 'line',
    data: data1,
    options: {}
}); 
//document.getElementById('card-1').style.display ='none' ;
// ================================================================== //
// Chart II: Type: Pie / Doughnut
// ================================================================== //

let data2 = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
let Bar = document.getElementById("BarChart").getContext('2d') ;
let BarChart = new Chart (Bar,
    {type: 'bar',
    data: data2,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    }); 
/* let data2 = [69,31];
let color2 =['#49A9EA','#36CAAB']
let Doughnut = document.getElementById("DoughnutChart").getContext('2d');
let DoughnutChart = new Chart(Doughnut, {
    type: 'doughnut',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: color2
        }]
    },
    options: {
        title: {
            text: "Do you like doughtnut?",
            display: true
        }
    }
});  */
// ================================================================== //
// Chart III: Type: Radar 
// ================================================================== //
/* let data3 = {
    labels: labels2,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

let Radar = document.getElementById("RadarChart").getContext('2d') ;
let RadarChart = new Chart (Radar,
    {type: 'radar',
    data: data3,
    options:{
        elements: {
          line: {
            borderWidth: 3
          }
        }
    },
}); 

// ================================================================== //
// Chart IV: Type: Doughnut 
// ================================================================== //
let data4 = {
    labels: labels3,
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
         backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
      hoverOffset: 4
    }]
  };

let Doughnut = document.getElementById("DoughnutChart").getContext('2d') ;
let DoughnutChart = new Chart (Doughnut,
    {type: 'doughnut',
    data: data4,
    }); 

    function updateChart(barvalue) */ 