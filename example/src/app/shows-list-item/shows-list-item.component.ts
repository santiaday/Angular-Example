import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/model/show.model';

@Component({
  selector: 'app-shows-list-item',
  templateUrl: './shows-list-item.component.html',
  styleUrls: ['./shows-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowsListItemComponent {

  @Input()
  show: Show;

  @Output()
  favorite = new EventEmitter();

}
