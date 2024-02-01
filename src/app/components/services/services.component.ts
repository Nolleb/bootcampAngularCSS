import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Service} from "../../models/service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = []
  url: string = '/assets/services/services.json'

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Service[]>(this.url).subscribe(res => {
      this.services = res
    });
  }
}
