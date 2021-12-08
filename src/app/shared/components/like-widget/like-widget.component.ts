import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent {
  //Toda vez que der um like vai emitir esse evento
  @Output() public liked = new EventEmitter<void>();

  //Total de likes
  @Input() public likes = 0;
  @Input() public id = null;
}
