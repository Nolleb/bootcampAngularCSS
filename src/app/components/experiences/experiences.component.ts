import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Testimonial} from "../../models/testimonial";
import {HttpClient} from "@angular/common/http";
import {Experience} from "../../models/experience";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences$?: Observable<Experience[]>
  url: string = '/assets/services/experiences.json'

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.experiences$ = this.http.get<Experience[]>(this.url)
  }
}
