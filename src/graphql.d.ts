type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ClientsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
};

export type ClientsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ClientsJsonEdge>;
  nodes: Array<ClientsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ClientsJsonGroupConnection>;
};

export type ClientsJsonConnectionDistinctArgs = {
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonEdge = {
  next?: Maybe<ClientsJson>;
  node: ClientsJson;
  previous?: Maybe<ClientsJson>;
};

export enum ClientsJsonFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  Name = 'name',
  Image___Id = 'image___id',
  Image___Parent___Id = 'image___parent___id',
  Image___Parent___Parent___Id = 'image___parent___parent___id',
  Image___Parent___Parent___Children = 'image___parent___parent___children',
  Image___Parent___Children = 'image___parent___children',
  Image___Parent___Children___Id = 'image___parent___children___id',
  Image___Parent___Children___Children = 'image___parent___children___children',
  Image___Parent___Internal___Content = 'image___parent___internal___content',
  Image___Parent___Internal___ContentDigest = 'image___parent___internal___contentDigest',
  Image___Parent___Internal___Description = 'image___parent___internal___description',
  Image___Parent___Internal___FieldOwners = 'image___parent___internal___fieldOwners',
  Image___Parent___Internal___IgnoreType = 'image___parent___internal___ignoreType',
  Image___Parent___Internal___MediaType = 'image___parent___internal___mediaType',
  Image___Parent___Internal___Owner = 'image___parent___internal___owner',
  Image___Parent___Internal___Type = 'image___parent___internal___type',
  Image___Children = 'image___children',
  Image___Children___Id = 'image___children___id',
  Image___Children___Parent___Id = 'image___children___parent___id',
  Image___Children___Parent___Children = 'image___children___parent___children',
  Image___Children___Children = 'image___children___children',
  Image___Children___Children___Id = 'image___children___children___id',
  Image___Children___Children___Children = 'image___children___children___children',
  Image___Children___Internal___Content = 'image___children___internal___content',
  Image___Children___Internal___ContentDigest = 'image___children___internal___contentDigest',
  Image___Children___Internal___Description = 'image___children___internal___description',
  Image___Children___Internal___FieldOwners = 'image___children___internal___fieldOwners',
  Image___Children___Internal___IgnoreType = 'image___children___internal___ignoreType',
  Image___Children___Internal___MediaType = 'image___children___internal___mediaType',
  Image___Children___Internal___Owner = 'image___children___internal___owner',
  Image___Children___Internal___Type = 'image___children___internal___type',
  Image___Internal___Content = 'image___internal___content',
  Image___Internal___ContentDigest = 'image___internal___contentDigest',
  Image___Internal___Description = 'image___internal___description',
  Image___Internal___FieldOwners = 'image___internal___fieldOwners',
  Image___Internal___IgnoreType = 'image___internal___ignoreType',
  Image___Internal___MediaType = 'image___internal___mediaType',
  Image___Internal___Owner = 'image___internal___owner',
  Image___Internal___Type = 'image___internal___type',
  Image___SourceInstanceName = 'image___sourceInstanceName',
  Image___AbsolutePath = 'image___absolutePath',
  Image___RelativePath = 'image___relativePath',
  Image___Extension = 'image___extension',
  Image___Size = 'image___size',
  Image___PrettySize = 'image___prettySize',
  Image___ModifiedTime = 'image___modifiedTime',
  Image___AccessTime = 'image___accessTime',
  Image___ChangeTime = 'image___changeTime',
  Image___BirthTime = 'image___birthTime',
  Image___Root = 'image___root',
  Image___Dir = 'image___dir',
  Image___Base = 'image___base',
  Image___Ext = 'image___ext',
  Image___Name = 'image___name',
  Image___RelativeDirectory = 'image___relativeDirectory',
  Image___Dev = 'image___dev',
  Image___Mode = 'image___mode',
  Image___Nlink = 'image___nlink',
  Image___Uid = 'image___uid',
  Image___Gid = 'image___gid',
  Image___Rdev = 'image___rdev',
  Image___Blksize = 'image___blksize',
  Image___Ino = 'image___ino',
  Image___Blocks = 'image___blocks',
  Image___AtimeMs = 'image___atimeMs',
  Image___MtimeMs = 'image___mtimeMs',
  Image___CtimeMs = 'image___ctimeMs',
  Image___BirthtimeMs = 'image___birthtimeMs',
  Image___Atime = 'image___atime',
  Image___Mtime = 'image___mtime',
  Image___Ctime = 'image___ctime',
  Image___Birthtime = 'image___birthtime',
  Image___PublicUrl = 'image___publicURL',
}

export type ClientsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
};

export type ClientsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ClientsJsonEdge>;
  nodes: Array<ClientsJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ClientsJsonSortInput = {
  fields?: Maybe<Array<Maybe<ClientsJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Float']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight?: Maybe<Scalars['String']>;
  shadow?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Float']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  childrenClientsJson?: Maybe<Array<Maybe<ClientsJson>>>;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export type FileFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFormat {
  No_Change = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export type ImageSharp = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  fixed?: Maybe<ImageSharpFixed>;
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  grayscale: Scalars['Boolean'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars['Int'];
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  grayscale: Scalars['Boolean'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars['Int'];
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale: Scalars['Boolean'];
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars['Int'];
  sizes: Scalars['String'];
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale: Scalars['Boolean'];
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars['Int'];
  sizes: Scalars['String'];
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive: Scalars['Boolean'];
  pngCompressionLevel: Scalars['Int'];
  pngCompressionSpeed: Scalars['Int'];
  grayscale: Scalars['Boolean'];
  duotone?: Maybe<DuotoneGradient>;
  base64: Scalars['Boolean'];
  traceSVG?: Maybe<Potrace>;
  toFormat: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars['Int'];
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  Fixed___Base64 = 'fixed___base64',
  Fixed___TracedSvg = 'fixed___tracedSVG',
  Fixed___AspectRatio = 'fixed___aspectRatio',
  Fixed___Width = 'fixed___width',
  Fixed___Height = 'fixed___height',
  Fixed___Src = 'fixed___src',
  Fixed___SrcSet = 'fixed___srcSet',
  Fixed___SrcWebp = 'fixed___srcWebp',
  Fixed___SrcSetWebp = 'fixed___srcSetWebp',
  Fixed___OriginalName = 'fixed___originalName',
  Resolutions___Base64 = 'resolutions___base64',
  Resolutions___TracedSvg = 'resolutions___tracedSVG',
  Resolutions___AspectRatio = 'resolutions___aspectRatio',
  Resolutions___Width = 'resolutions___width',
  Resolutions___Height = 'resolutions___height',
  Resolutions___Src = 'resolutions___src',
  Resolutions___SrcSet = 'resolutions___srcSet',
  Resolutions___SrcWebp = 'resolutions___srcWebp',
  Resolutions___SrcSetWebp = 'resolutions___srcSetWebp',
  Resolutions___OriginalName = 'resolutions___originalName',
  Fluid___Base64 = 'fluid___base64',
  Fluid___TracedSvg = 'fluid___tracedSVG',
  Fluid___AspectRatio = 'fluid___aspectRatio',
  Fluid___Src = 'fluid___src',
  Fluid___SrcSet = 'fluid___srcSet',
  Fluid___SrcWebp = 'fluid___srcWebp',
  Fluid___SrcSetWebp = 'fluid___srcSetWebp',
  Fluid___Sizes = 'fluid___sizes',
  Fluid___OriginalImg = 'fluid___originalImg',
  Fluid___OriginalName = 'fluid___originalName',
  Fluid___PresentationWidth = 'fluid___presentationWidth',
  Fluid___PresentationHeight = 'fluid___presentationHeight',
  Sizes___Base64 = 'sizes___base64',
  Sizes___TracedSvg = 'sizes___tracedSVG',
  Sizes___AspectRatio = 'sizes___aspectRatio',
  Sizes___Src = 'sizes___src',
  Sizes___SrcSet = 'sizes___srcSet',
  Sizes___SrcWebp = 'sizes___srcWebp',
  Sizes___SrcSetWebp = 'sizes___srcSetWebp',
  Sizes___Sizes = 'sizes___sizes',
  Sizes___OriginalImg = 'sizes___originalImg',
  Sizes___OriginalName = 'sizes___originalName',
  Sizes___PresentationWidth = 'sizes___presentationWidth',
  Sizes___PresentationHeight = 'sizes___presentationHeight',
  Original___Width = 'original___width',
  Original___Height = 'original___height',
  Original___Src = 'original___src',
  Resize___Src = 'resize___src',
  Resize___TracedSvg = 'resize___tracedSVG',
  Resize___Width = 'resize___width',
  Resize___Height = 'resize___height',
  Resize___AspectRatio = 'resize___aspectRatio',
  Resize___OriginalName = 'resize___originalName',
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  hasNextPage: Scalars['Boolean'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  Turnpolicy_Black = 'TURNPOLICY_BLACK',
  Turnpolicy_White = 'TURNPOLICY_WHITE',
  Turnpolicy_Left = 'TURNPOLICY_LEFT',
  Turnpolicy_Right = 'TURNPOLICY_RIGHT',
  Turnpolicy_Minority = 'TURNPOLICY_MINORITY',
  Turnpolicy_Majority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  file?: Maybe<File>;
  allFile?: Maybe<FileConnection>;
  sitePage?: Maybe<SitePage>;
  allSitePage?: Maybe<SitePageConnection>;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin?: Maybe<SitePluginConnection>;
  site?: Maybe<Site>;
  allSite?: Maybe<SiteConnection>;
  directory?: Maybe<Directory>;
  allDirectory?: Maybe<DirectoryConnection>;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp?: Maybe<ImageSharpConnection>;
  clientsJson?: Maybe<ClientsJson>;
  allClientsJson?: Maybe<ClientsJsonConnection>;
};

export type QueryFileArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  jsonName?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryClientsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
};

export type QueryAllClientsJsonArgs = {
  filter?: Maybe<ClientsJsonFilterInput>;
  sort?: Maybe<ClientsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  SiteMetadata___Title = 'siteMetadata___title',
  SiteMetadata___Description = 'siteMetadata___description',
  SiteMetadata___Author = 'siteMetadata___author',
  Port = 'port',
  Host = 'host',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  BuildTime = 'buildTime',
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars['String']>;
  jsonName?: Maybe<Scalars['String']>;
  internalComponentName?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  Path = 'path',
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreator___Id = 'pluginCreator___id',
  PluginCreator___Parent___Id = 'pluginCreator___parent___id',
  PluginCreator___Parent___Parent___Id = 'pluginCreator___parent___parent___id',
  PluginCreator___Parent___Parent___Children = 'pluginCreator___parent___parent___children',
  PluginCreator___Parent___Children = 'pluginCreator___parent___children',
  PluginCreator___Parent___Children___Id = 'pluginCreator___parent___children___id',
  PluginCreator___Parent___Children___Children = 'pluginCreator___parent___children___children',
  PluginCreator___Parent___Internal___Content = 'pluginCreator___parent___internal___content',
  PluginCreator___Parent___Internal___ContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreator___Parent___Internal___Description = 'pluginCreator___parent___internal___description',
  PluginCreator___Parent___Internal___FieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreator___Parent___Internal___IgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreator___Parent___Internal___MediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreator___Parent___Internal___Owner = 'pluginCreator___parent___internal___owner',
  PluginCreator___Parent___Internal___Type = 'pluginCreator___parent___internal___type',
  PluginCreator___Children = 'pluginCreator___children',
  PluginCreator___Children___Id = 'pluginCreator___children___id',
  PluginCreator___Children___Parent___Id = 'pluginCreator___children___parent___id',
  PluginCreator___Children___Parent___Children = 'pluginCreator___children___parent___children',
  PluginCreator___Children___Children = 'pluginCreator___children___children',
  PluginCreator___Children___Children___Id = 'pluginCreator___children___children___id',
  PluginCreator___Children___Children___Children = 'pluginCreator___children___children___children',
  PluginCreator___Children___Internal___Content = 'pluginCreator___children___internal___content',
  PluginCreator___Children___Internal___ContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreator___Children___Internal___Description = 'pluginCreator___children___internal___description',
  PluginCreator___Children___Internal___FieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreator___Children___Internal___IgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreator___Children___Internal___MediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreator___Children___Internal___Owner = 'pluginCreator___children___internal___owner',
  PluginCreator___Children___Internal___Type = 'pluginCreator___children___internal___type',
  PluginCreator___Internal___Content = 'pluginCreator___internal___content',
  PluginCreator___Internal___ContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreator___Internal___Description = 'pluginCreator___internal___description',
  PluginCreator___Internal___FieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreator___Internal___IgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreator___Internal___MediaType = 'pluginCreator___internal___mediaType',
  PluginCreator___Internal___Owner = 'pluginCreator___internal___owner',
  PluginCreator___Internal___Type = 'pluginCreator___internal___type',
  PluginCreator___Resolve = 'pluginCreator___resolve',
  PluginCreator___Name = 'pluginCreator___name',
  PluginCreator___Version = 'pluginCreator___version',
  PluginCreator___PluginOptions___Name = 'pluginCreator___pluginOptions___name',
  PluginCreator___PluginOptions___Path = 'pluginCreator___pluginOptions___path',
  PluginCreator___PluginOptions___Fonts = 'pluginCreator___pluginOptions___fonts',
  PluginCreator___PluginOptions___Fonts___Family = 'pluginCreator___pluginOptions___fonts___family',
  PluginCreator___PluginOptions___Fonts___Variants = 'pluginCreator___pluginOptions___fonts___variants',
  PluginCreator___PluginOptions___Short_Name = 'pluginCreator___pluginOptions___short_name',
  PluginCreator___PluginOptions___Icons = 'pluginCreator___pluginOptions___icons',
  PluginCreator___PluginOptions___Icons___Src = 'pluginCreator___pluginOptions___icons___src',
  PluginCreator___PluginOptions___Icons___Sizes = 'pluginCreator___pluginOptions___icons___sizes',
  PluginCreator___PluginOptions___Icons___Type = 'pluginCreator___pluginOptions___icons___type',
  PluginCreator___PluginOptions___Start_Url = 'pluginCreator___pluginOptions___start_url',
  PluginCreator___PluginOptions___Background_Color = 'pluginCreator___pluginOptions___background_color',
  PluginCreator___PluginOptions___Theme_Color = 'pluginCreator___pluginOptions___theme_color',
  PluginCreator___PluginOptions___Display = 'pluginCreator___pluginOptions___display',
  PluginCreator___PluginOptions___TrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreator___PluginOptions___Head = 'pluginCreator___pluginOptions___head',
  PluginCreator___PluginOptions___Anonymize = 'pluginCreator___pluginOptions___anonymize',
  PluginCreator___PluginOptions___RespectDnt = 'pluginCreator___pluginOptions___respectDNT',
  PluginCreator___PluginOptions___SampleRate = 'pluginCreator___pluginOptions___sampleRate',
  PluginCreator___PluginOptions___SiteSpeedSampleRate = 'pluginCreator___pluginOptions___siteSpeedSampleRate',
  PluginCreator___PluginOptions___CookieDomain = 'pluginCreator___pluginOptions___cookieDomain',
  PluginCreator___PluginOptions___PathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreator___NodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreator___BrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreator___SsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreator___PluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreator___PackageJson___Name = 'pluginCreator___packageJson___name',
  PluginCreator___PackageJson___Description = 'pluginCreator___packageJson___description',
  PluginCreator___PackageJson___Version = 'pluginCreator___packageJson___version',
  PluginCreator___PackageJson___Main = 'pluginCreator___packageJson___main',
  PluginCreator___PackageJson___Author = 'pluginCreator___packageJson___author',
  PluginCreator___PackageJson___License = 'pluginCreator___packageJson___license',
  PluginCreator___PackageJson___Dependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreator___PackageJson___Dependencies___Name = 'pluginCreator___packageJson___dependencies___name',
  PluginCreator___PackageJson___Dependencies___Version = 'pluginCreator___packageJson___dependencies___version',
  PluginCreator___PackageJson___DevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreator___PackageJson___DevDependencies___Name = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreator___PackageJson___DevDependencies___Version = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreator___PackageJson___PeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreator___PackageJson___PeerDependencies___Name = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreator___PackageJson___PeerDependencies___Version = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreator___PackageJson___Keywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  jsonName?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptions___Name = 'pluginOptions___name',
  PluginOptions___Path = 'pluginOptions___path',
  PluginOptions___Fonts = 'pluginOptions___fonts',
  PluginOptions___Fonts___Family = 'pluginOptions___fonts___family',
  PluginOptions___Fonts___Variants = 'pluginOptions___fonts___variants',
  PluginOptions___Short_Name = 'pluginOptions___short_name',
  PluginOptions___Icons = 'pluginOptions___icons',
  PluginOptions___Icons___Src = 'pluginOptions___icons___src',
  PluginOptions___Icons___Sizes = 'pluginOptions___icons___sizes',
  PluginOptions___Icons___Type = 'pluginOptions___icons___type',
  PluginOptions___Start_Url = 'pluginOptions___start_url',
  PluginOptions___Background_Color = 'pluginOptions___background_color',
  PluginOptions___Theme_Color = 'pluginOptions___theme_color',
  PluginOptions___Display = 'pluginOptions___display',
  PluginOptions___TrackingId = 'pluginOptions___trackingId',
  PluginOptions___Head = 'pluginOptions___head',
  PluginOptions___Anonymize = 'pluginOptions___anonymize',
  PluginOptions___RespectDnt = 'pluginOptions___respectDNT',
  PluginOptions___SampleRate = 'pluginOptions___sampleRate',
  PluginOptions___SiteSpeedSampleRate = 'pluginOptions___siteSpeedSampleRate',
  PluginOptions___CookieDomain = 'pluginOptions___cookieDomain',
  PluginOptions___PathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJson___Name = 'packageJson___name',
  PackageJson___Description = 'packageJson___description',
  PackageJson___Version = 'packageJson___version',
  PackageJson___Main = 'packageJson___main',
  PackageJson___Author = 'packageJson___author',
  PackageJson___License = 'packageJson___license',
  PackageJson___Dependencies = 'packageJson___dependencies',
  PackageJson___Dependencies___Name = 'packageJson___dependencies___name',
  PackageJson___Dependencies___Version = 'packageJson___dependencies___version',
  PackageJson___DevDependencies = 'packageJson___devDependencies',
  PackageJson___DevDependencies___Name = 'packageJson___devDependencies___name',
  PackageJson___DevDependencies___Version = 'packageJson___devDependencies___version',
  PackageJson___PeerDependencies = 'packageJson___peerDependencies',
  PackageJson___PeerDependencies___Name = 'packageJson___peerDependencies___name',
  PackageJson___PeerDependencies___Version = 'packageJson___peerDependencies___version',
  PackageJson___Keywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  fonts?: Maybe<Array<Maybe<SitePluginPluginOptionsFonts>>>;
  short_name?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  anonymize?: Maybe<Scalars['Boolean']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
  sampleRate?: Maybe<Scalars['Int']>;
  siteSpeedSampleRate?: Maybe<Scalars['Int']>;
  cookieDomain?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterListInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
  sampleRate?: Maybe<IntQueryOperatorInput>;
  siteSpeedSampleRate?: Maybe<IntQueryOperatorInput>;
  cookieDomain?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  family?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
};

export type SitePluginPluginOptionsIcons = {
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};
