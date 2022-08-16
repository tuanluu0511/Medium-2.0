export interface Post {
  _id: string;
  _createdAt: string;
  author: {
    name: string;
    image: string;
  };
  comments: Comment[];
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  title: string;
  body: [object];
}

export interface Comment {
  approved: boolean;
  name: string;
  email: string;
  comment: string;
  post: {
    _type: string;
    _ref: string;
  };
  _createAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
