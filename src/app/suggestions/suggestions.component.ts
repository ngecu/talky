import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent {

  users: User[] = [
    { username: 'instagram', isFollowing: false, profileImage: 'assets/images/profiles/profile-3.jpg' },
    { username: 'dccomics', isFollowing: false, profileImage: 'assets/images/profiles/profile-4.png' },
    { username: 'thecw', isFollowing: false, profileImage: 'assets/images/profiles/profile-5.jpg' }
  ];

  toggleFollow(user: User): void {
    if (user.isFollowing) {
      // Toggle the Follow state without a confirmation
      if (confirm(`Are you sure you want to unfollow ${user.username}?`)) {
        user.isFollowing = false;
      }
    } else {
      // Toggle the Follow state without a confirmation
      user.isFollowing = !user.isFollowing;
    }
  }

}
