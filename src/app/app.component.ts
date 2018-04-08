import { PostsServiceService } from './posts-service.service';
import { Post } from './post.inteface';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	// posts: Observable<Post[]>;
	posts: Post[];

	constructor(private postsService: PostsServiceService) {
		// this.posts = postsService.getPosts();
		postsService.getPostsHttp().subscribe((content) => {
			this.posts = content;
		});

		// this.posts = postsService.getPostsHttp();
	}

	removePost(id: number) {
		this.posts = this.postsService.removePost(this.posts, id);
	}
}
