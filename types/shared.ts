export type SysLink = {
  sys: {
    type: "Link";
    linkType: string;
    id: string;
  };
};

export type Sys = {
  space: SysLink;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: SysLink;
  publishedVersion: number;
  revision: number;
  contentType: SysLink;
  locale: string;
};
