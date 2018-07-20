import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ChatBotService } from '../services/chat-bot.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: [ './chat.component.css' ]
})
export class ChatComponent implements OnInit, AfterViewChecked {
  user: string;
  guest: string;
  messages: any[];
  message = '';

  @ViewChild('scrollBox') private scrollBox: ElementRef;

  constructor(private chatBotService: ChatBotService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  close() {
  }

  onKeyUp(event) {
    if (event.keyCode == 13) {
      this.send();
    }
  }

  send() {
    this.addMessage(this.user, this.message, 'left');
    this.reply();
    this.message = '';
  }

  private addMessage(author: string, message: string, type: string) {
    this.messages.push({
      author: author,
      message: message,
      type: type
    });
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollBox.nativeElement.scrollTop = this.scrollBox.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }

  private reply() {
    setTimeout(() => {
      this.addMessage(this.guest, this.chatBotService.respond(), 'right');
    }, 2500);
  }
}
