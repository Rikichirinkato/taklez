import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements AfterViewInit {
  @ViewChild('video') video: ElementRef;

  ngAfterViewInit(): void {
    const constraints  = {
      video: { width: 300, height: 300 }
    }
    navigator.mediaDevices.enumerateDevices().then(i => console.log(i))
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        this.video.nativeElement.srcObject = stream;
      })
      .catch(err => console.error(err));
  }


}
