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
  dataAgent: any;
  service: any;
  me: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.me = JSON.parse(localStorage.getItem('user'));
    console.log('Dashboard this.me', this.me);
    this.apiService.get('service/' + this.me.service_id).subscribe(data => {
      this.service = data;
    });

    this.apiService.get('mytimeoff').subscribe(data => {
      console.log('AgentDashboard timeoff data', data);
      this.dataAgent = data;
    });
  }

}
