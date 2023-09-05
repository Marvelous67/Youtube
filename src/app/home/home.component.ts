import { Component } from '@angular/core';
import { MugiwaraModule } from '../OnePiece/mugiwara/mugiwara.module';
import { ServerService } from '../Server/server.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  constructor(public youtubeApiService: ServerService, private sanitizer : DomSanitizer) { }
  showFiller = false;
  expand1: boolean = true;
  isMenuOpen: boolean = true;
  searchQuery: string = '';
  creatorProfileImages: { [channelId: string]: SafeResourceUrl } = {};
  videos: any[] = [];

  toggleMenu() {
    this.expand1 = !this.expand1;
    this.isMenuOpen = !this.isMenuOpen;
  }

  searchVideos() {
    this.youtubeApiService.searchVideos(this.searchQuery)
      .subscribe((response) => {
        this.videos = response.items;
        console.log('Videos:', this.videos);
        
      }, (error) => {
        console.error('Error searching for videos:', error);
      });
  }

  getVideoEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getThumbnailUrl(url: string): string {
    return url;
  }



  getCreatorProfileImage(channelId: string): SafeResourceUrl {
    if (!this.creatorProfileImages[channelId]) {
      // If the profile image URL is not cached, fetch it
      this.youtubeApiService.getChannelDetails(channelId)
        .subscribe((channelDetails) => {
          const profileImageUrl = channelDetails.items[0]?.snippet?.thumbnails?.default?.url;
          if (profileImageUrl) {
            // Store the profile image URL in the cache
            this.creatorProfileImages[channelId] = this.sanitizer.bypassSecurityTrustResourceUrl(profileImageUrl);
          }
        });
    }
    return this.creatorProfileImages[channelId];

}
ngOnInit():void{
  // this.searchVideos();
}
}