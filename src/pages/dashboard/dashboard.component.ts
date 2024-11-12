import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { TableComponent } from '../../components/table/table.component';
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, CommonModule, TableComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent implements OnInit  {
  data = [1,2,3,4]

  public chart: any;
  public chart1:any;

  ngOnInit(): void {
    this.initChart();
  }

  private initChart(): void {
    this.chart = new Chart('MyChart', {
      type: 'bar',
    data:{
        labels: ['January', 'February', 'March', 'April', 'May','June','July','Auguest','September','November','December'],
        datasets: [{
          label: 'Sales', // label for the dataset
          data: [10, 20, 30, 40, 50,40,60,30,20,30,40], 
          backgroundColor: 'rgba(75, 192, 192, 1)', 
          borderColor: 'rgba(75, 192, 192, 1)', 
          borderWidth: 1 
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.chart1 = new Chart('MyChart1',{
      type: 'polarArea',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // Labels for each segment
        datasets: [{
          label: 'My Dataset',
          data: [11, 16, 7, 3, 14, 5], // Values for each segment
          backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'], // Segment colors
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'], // Border colors
          borderWidth: 1, // Width of the border
        }]
      },
      options: {
        responsive: true, // Makes the chart responsive to window resizing
        scales: {
          r: {
            beginAtZero: true // Ensures the scale starts at zero
          }
        },
        plugins: {
          legend: {
            position: 'top', // Position of the legend (could be 'top', 'bottom', 'left', 'right')
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`; // Customizes the tooltip label
              }
            }
          }
        }
      }
    })
  }
}
