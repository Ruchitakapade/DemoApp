
import { Meta } from '@angular/platform-browser';
import { ModelService } from "d:/Niminfo/DemoApp/src/app/app.module";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private meta: Meta, private model: Model, private router: Router) {
  }

  ngOnInit() {

    localStorage.clear();
    // SEO
    this.meta.addTags([
      { name: 'description', content: 'Best leaders in Creative Digital Recruitment' },
      { name: 'author', content: 'twoBytes consulting' },
      { name: 'keywords', content: 'Angular, twobytes, consulting, recruitment, leader, jobs' }
    ]);

  }
  openModal(id: string) {
    this.model.open(id);
  }

  closeModal(id: string) {
    this.model.close(id);
  }


}
