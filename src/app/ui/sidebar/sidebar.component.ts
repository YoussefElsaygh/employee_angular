import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() onChangeLangage = new EventEmitter();
  isEnglish = true;
  changeLangage(lang) {
    this.isEnglish = !this.isEnglish;
    this.onChangeLangage.emit(lang);
  }

}
