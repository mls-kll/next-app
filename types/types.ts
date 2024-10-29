export type ProjectImage = {
  src: string;
  altText: string;
};

export type Project = {
  title: string;
  id: string;
  description: string;
  coverImage: string;
  images: ProjectImage[];
  slug: string;
};
