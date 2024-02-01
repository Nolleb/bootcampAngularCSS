import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Testimonial} from "../../models/testimonial";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials$?: Observable<Testimonial[]>
  url: string = '/assets/services/testimonials.json'

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.testimonials$ = this.http.get<Testimonial[]>(this.url)
  }
}
