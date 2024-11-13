import { Metadata } from "contentful";
import { Sys } from "./shared";

type FileDetails = {
  size: number;
  image: {
    width: number;
    height: number;
  };
};

type File = {
  url: string;
  details: FileDetails;
  fileName: string;
  contentType: string;
};

type Fields = {
  title: string;
  description: string;
  file: File;
};

type Asset = {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
};

export type ProjectFields = {
  title: string;
  date: string;
  description: string;
  cover: Asset;
  images: Asset[];
  url: string;
};

export type Project = {
  metadata: Metadata;
  sys: Sys;
  fields: ProjectFields;
};

export type ProjectCardProps = {
  title: string;
  date: string;
  description: string;
  coverImage: string;
  url: string;
};
