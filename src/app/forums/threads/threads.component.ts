import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Thread } from '../services/data';
import { ForumsService } from '../services/forums.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: [ './threads.component.css' ]
})
export class ThreadsComponent implements OnInit {
  threads: Thread[];

  constructor(private route: ActivatedRoute,
              private forumsService: ForumsService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      return this.threads = this.forumsService.forum(params[ 'forum_alias' ]).threads;
    });
  }

}
