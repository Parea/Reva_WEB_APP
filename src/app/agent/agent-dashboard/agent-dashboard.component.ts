import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../../service/api/api.service';


@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {

  environment = environment;
  dataAgent: any = [];
  service: any;
  selectedService: any;
  me: any;
  totalTimeoff = 0;
  totalTimeoffValidated = 0;
  totalTimeoffNotValidated = 0;
  allDatas = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.me = JSON.parse(localStorage.getItem('user'));
    console.log('Dashboard this.me', this.me);
    this.selectedService = this.me.service_id;

    this.apiService.get('mytimeoff').subscribe(data => {
      // console.log('AgentDashboard timeoff data', data);
      this.dataAgent = data;
    });

    this.getAgentDatas();
  }

  getAgentDatas() {
    this.totalTimeoff = 0;
    this.totalTimeoffValidated = 0;
    this.totalTimeoffNotValidated = 0;
    this.allDatas = [];

    this.apiService.get('service/' + this.selectedService).subscribe(data => {
      this.service = data;
      // console.log('Agent service data', this.service);
    });

    const url = (this.selectedService) ? 'employeeTimeoffbyservice/' + this.selectedService : 'agentsService';
    this.apiService.get(url).subscribe(data => {
      this.dataAgent = data;
      this.dataAgent = [] ;
      console.log('dataAgent', this.dataAgent);

      for (let i = 0; i < this.dataAgent.length; i++) {
        this.dataAgent[i]['employee'] = this.dataAgent[i].employee;
      }
    });
  }
}
