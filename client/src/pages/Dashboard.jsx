import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Pie, Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"

import "../styles/Dashboard.css"

export default function Dashboard() {
  const dataBar = {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    datasets: [
      {
        label: 'Budżet w poszczególnych miesiącach',
        data: [500, 200, 300, 150, 250, 350, 400, 300, 200, 150, 100, 300],
        backgroundColor: '#3fc380',
      }
    ],
};

const optionsBar = {
    type: 'bar',
    data: dataBar,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
              color: 'transparent'
            },
            ticks: {
                font: {
                    family: "'Poppins', sans-serif",
                    size: 16
                }
            }
        },
        y: {
            ticks: {
                font: {
                    family: "'Poppins', sans-serif",
                    size: 16
                }
            },
            gridLines: {
              display: false
            }
        }
    },
    plugins: {
        legend: {
            labels: {
                font: {
                    family: "'Poppins', sans-serif",
                    size: 16,
                    weight: 'bold'
                }
            }
        }
    }
};


  const dataPie = {
    labels: ['Zakupy', 'Wydatki', 'Rachunki'],
    datasets: [
      {
      label: 'Budżet w poszczególnych miesiącach',
      data: [500, 200, 300],
      backgroundColor: ['#2599EF', '#27CE88', '#FFC675']
      }
    ],
  };
  const optionsPie = {
    type: 'bar',
    data: dataPie,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
          labels: {
              font: {
                  family: "'Poppins', sans-serif",
                  size: 16,
                  weight: 'bold'
              }
          }
      }
  }
  };
  const dataLine = {
  labels: ['I Kwartał', 'II Kwartał', 'III Kwartał', 'IV Kwartał'],
  datasets: [{
    label: 'Przychód kwartalny',
    data: [65, 59, 80, 81],
    backgroundColor: '#4D4CFF',
    borderColor: '#4D4CFF'
  }]
  };
  const optionsLine = {
    type: 'line',
    data: dataLine,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
          ticks: {
              font: {
                  family: "'Poppins', sans-serif",
                  size: 16
              }
          }
      },
      y: {
          ticks: {
              font: {
                  family: "'Poppins', sans-serif",
                  size: 16
              }
          }
      }
  },
  plugins: {
      legend: {
          labels: {
              font: {
                  family: "'Poppins', sans-serif",
                  size: 16,
                  weight: 'bold'
              }
          }
      }
  }
  }

  return (
  <div >
    <div className='main-container'>




      <div className="bar-diagram">
          <Bar data={dataBar} options={optionsBar} />    
      </div>
      <div className="pie-diagram">
          <Pie data={dataPie} options={optionsPie} />
      </div>


      <div className='line-diagram'>
          <Line data={dataLine} options={optionsLine} />
      </div>


      <div className="shortcut-info-box">
        <div className="stock-income-info-box">
          <h2>
            Akcje<br />
            Największy wzrost<br />
          </h2>
          <h2 className='tab-box'> PKO SA </h2>
          <br /> 
          <h2 className='income-color-dashboard'>15%</h2>
        </div>

        <div className="stock-expanse-info-box">
        <h2>
            Akcje<br />
            Największy spadek<br />
          </h2>
          <h2 className='tab-box'> Orlen </h2>
          <br /> 
          <h2 className='income-color-dashboard'>33%</h2>
        </div>
        <div className="user-bills-info-box">
        <h2>Twoje płatności</h2>
          <h2 className='user-account-info-text'>Sprawdź swoje rachunki i płatności</h2>
        </div>
        <div className="user-account-info-box">
          <h2>Twoje konto</h2>
          <h2 className='user-account-info-text'>Zarządzaj danymi Twojego konta</h2>
        </div>
      </div>
    </div>
  </div>
  );
}