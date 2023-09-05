import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {

  private apiKey = 'AIzaSyDr7ZryTY3AlpBp9ONwpj7RT8oK612Uzq8'; // Replace with your API key
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  // Search for videos by query
  searchVideos(query: string, pageToken?: string): Observable<any> {
    const maxResults = 10;
    const url = `${this.apiUrl}/search?key=${this.apiKey}&q=${query}&part=snippet&type=video&maxResults=10`;
    return this.http.get(url);
  }



  getChannelDetails(channelId: string): Observable<any> {
    const params = {
      key: this.apiKey,
      part: 'snippet',
      id: channelId
    };
    return this.http.get(`${this.apiUrl}/channels`, { params });
  }

}
