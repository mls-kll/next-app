import { Metadata } from "contentful";
import { Sys } from "./shared";

export type MilestoneFields = {
  date: string;
  description: string;
};

export type Milestone = {
  metadata: Metadata;
  sys: Sys;
  fields: MilestoneFields;
};

export type AboutFields = {
  title: string;
  mileStone: Milestone[];
};

export type AboutData = {
  metadata: Metadata;
  sys: Sys;
  fields: AboutFields;
};
