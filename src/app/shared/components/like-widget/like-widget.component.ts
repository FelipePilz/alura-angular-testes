import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit {
  //Toda vez que der um like vai emitir esse evento
  @Output() public liked = new EventEmitter<void>();

  //Total de likes
  @Input() public likes = 0;
  @Input() public id = null;

  public fonts = { faThumbsUp };

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }
}
