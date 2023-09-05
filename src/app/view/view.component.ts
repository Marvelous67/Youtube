import { Component , OnInit} from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  videoId: string = '';
  videoUrl: SafeResourceUrl = ''; // Use SafeResourceUrl for the URL

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.videoId = params['id'];
      this.videoUrl = this.getVideoEmbedUrl();
    });
  }

  getVideoEmbedUrl(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url); // Mark the URL as safe
  }


  showFiller = false;
  expand1: boolean = true;
  isMenuOpen: boolean = true;
nnOnInit():void{
  this.toggleMenu();
}
  toggleMenu() {
    this.expand1 = !this.expand1;
    this.isMenuOpen = !this.isMenuOpen;
  }
}
