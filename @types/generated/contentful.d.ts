// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ICategoryFields {
  /** Title */
  title?: string | undefined;
}

export interface ICategory extends Entry<ICategoryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "category";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPortfolioFields {
  /** title */
  title: string;

  /** slug */
  slug: string;

  /** cover */
  cover?: Asset | undefined;
}

export interface IPortfolio extends Entry<IPortfolioFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "portfolio";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPostFields {
  /** title */
  title?: string | undefined;

  /** subtitle */
  subtitle?: string | undefined;

  /** slug */
  slug: string;

  /** excerpt */
  excerpt?: string | undefined;

  /** image */
  image?: Asset | undefined;

  /** tags */
  tags?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** body */
  body?: string | undefined;

  /** date */
  date?: string | undefined;

  /** postconfig */
  postconfig?: Record<string, any> | undefined;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITagFields {
  /** value */
  value: string;
}

export interface ITag extends Entry<ITagFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "tag";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "category" | "portfolio" | "post" | "tag";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";