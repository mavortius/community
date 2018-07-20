import { Component, OnInit } from '@angular/core';

import { Forum } from '../services/data';
import { ForumsService } from '../services/forums.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forum: Forum;

  constructor(private forumsService: ForumsService) { }

  ngOnInit() {
  }

}
