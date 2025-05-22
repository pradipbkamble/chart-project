import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-company-chart',
  standalone: true,
  imports: [],
  templateUrl: './company-chart.component.html',
  styleUrl: './company-chart.component.scss'
})
export class CompanyChartComponent implements AfterViewInit {
  ngAfterViewInit() {
    const ctx = document.getElementById('companyChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Apple', 'Microsoft', 'Google', 'Amazon', 'Tesla'],
        datasets: [
          {
            label: 'Revenue in Billion USD',
            data: [394, 211, 257, 514, 81],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          title: {
            display: true,
            text: 'Top Tech Company Revenues (2023)'
          }
        }
      }
    });
  }

}







