export interface UserName {
  first: string;
  last: string;
}

export interface UserLocation {
  city: string;
  state: string;
  country: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  id: string;
  name: UserName;
  location: UserLocation;
  email: string;
  cellphone: string;
  picture: UserPicture;
  latestPosts?: Post[];
}

export interface MediaContent {
  hasMediaContent: boolean;
  type: 'IMAGE' | 'VIDEO' | null;
  mediaUrl: string | null;
}

export interface Post {
  id: string;
  userId: string;
  userImage: string;
  userName: string;
  date: string;
  title: string;
  textContent: string;
  mediaContent: MediaContent;
}

export interface FeedProviderValue {
  isLoading: boolean;
  feedData: Post[] | null;
  error: string | null;
}

export enum Page {
  FEED,
  POST_DETAIL,
  PROFILE,
}
