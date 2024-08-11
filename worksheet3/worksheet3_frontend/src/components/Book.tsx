export type Book = {
  _id?: string;
  title?: string;
  isbn?: string;
  author?: string;
  description?: string;
  published_date?: string; // 将 Date 改为 string 类型以避免 undefined 问题
  publisher?: string;
  updated_date?: string; // 同上
};

export const DefaultEmptyBook: Book = {
  _id: '', // 将 undefined 改为空字符串
  title: '',
  isbn: '',
  author: '',
  description: '',
  published_date: '', // 改为空字符串
  publisher: '',
  updated_date: '', // 改为空字符串
};
