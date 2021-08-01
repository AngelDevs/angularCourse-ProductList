import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({ selector: 'stars', templateUrl: './star.compoment.html' })
export class StarsCompoment implements OnChanges {
  @Input() rating: number = 0;
  width = 80;

  @Output() ratingNotifier: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.width = (this.rating * this.width) / 5;
  }

  onClick() {
    this.ratingNotifier.emit(`${this.rating} clicked`);
  }
}
EventEmitter;
