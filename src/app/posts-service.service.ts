import { Post } from './post.inteface';
import { HttpClient } from '@angular/common/http';
import { posts } from './posts.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsServiceService {
	constructor(private http: HttpClient) {}

	urlHttp = 'http://jsonplaceholder.typicode.com/posts';

	getPosts(): Post[] {
		return posts;
	}

	getPostsHttp() {
		return this.http.get<Post[]>(this.urlHttp);
	}

	removePost(posts: Post[], id: number) {
		posts = posts.filter((post) => post.id !== id);

		return posts;
	}
}
