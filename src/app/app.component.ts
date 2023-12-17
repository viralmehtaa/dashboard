import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./services/dashboard.service";
import {GetAccountStatementAPIResponseModel} from "./interfaces/dashboardAPI.interface";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  viewChartFilterOptions: {name: string}[] = [
    {name: 'Daily'},
    {name: 'Weekly'},
    {name: 'Monthly'},
    {name: 'Yearly'},
  ]
  selectedViewChartFilterOption: string = 'Monthly';
  checked = false;
  monthlyStatisticsChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Income',
            backgroundColor: '#99a6a9',
            data: [65, 59, 80, 81, 86, 55, 90, 100, 70, 85, 76, 98]
        },
        {
            label: 'Investment',
            backgroundColor: '#8481ab',
            data: [28, 20, 35, 19, 10, 20, 40, 30, 25, 30, 26, 45]
        },
        {
          label: 'Expense',
          backgroundColor: '#5a5a88',
          data: [32, 28, 42, 55, 66, 25, 48, 70, 40, 45,50,40]
      }
    ]
};
monthlyStatisticsChartOptions = {
    plugins: {
        legend: {
          position: 'bottom',
            labels: {
                color: '#99a6a9'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#969696'
            },
            grid: {
                color: 'rgba(255,255,255,0.2)'
            }
        },
        y: {
            ticks: {
                color: '#969696'
            },
            grid: {
                color: '#eeeeee'
            }
        }
    }
  };
  accountStatementDetails!: GetAccountStatementAPIResponseModel;

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getAccountStatement();
  }

  /**
   * gets account details like balance, monthly statistics and transactions
   */
  getAccountStatement() {
    this.dashboardService.getAccountStatementAPI().subscribe({next: (getAccountStatementAPIResponse: GetAccountStatementAPIResponseModel) => {
      this.accountStatementDetails = getAccountStatementAPIResponse;
    }})
  }
}
