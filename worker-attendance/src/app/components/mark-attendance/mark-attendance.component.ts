import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent implements OnInit, OnDestroy {
  liveTime: any;
  timer: any;
  constructor() { }

  ngOnInit(): void {
    this.timer = setInterval(()=> {
       this.liveTime = new Date();
    },100)
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
  onPunchIn() {
    Swal.fire({
      icon: 'success',
      title: 'Punch In Marked Successfully.'
    })
  }
  onPunchOut() {

  }
}
