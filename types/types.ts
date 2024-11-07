export type ProjectImage = {
  src: string;
  title: string;
};

export type Project = {
  title: string;
  id: string;
  description: string;
  coverImage: string;
  images: ProjectImage[];
  slug: string;
};
