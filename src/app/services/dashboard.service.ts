import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { GetAccountStatementAPIResponseModel} from "../interfaces/dashboardAPI.interface";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getAccountStatementAPI() : Observable<GetAccountStatementAPIResponseModel> {
    return this.http.get<GetAccountStatementAPIResponseModel>('https://1.api.fy23ey06.careers.ifelsecloud.com');
  }
}
