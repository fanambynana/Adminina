/*import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";*/
import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostCreate, PostEdit, PostList, PostShow } from "./posts";
import { CommentCreate, CommentEdit, CommentList, CommentShow } from "./comment";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} recordRepresentation="title" show={PostShow} edit={PostEdit} create={PostCreate}/>
    <Resource name="users" recordRepresentation="name" />
    <Resource name="comments" list={CommentList} show={CommentShow} edit={CommentEdit} create={CommentCreate}/>
  </Admin>
);
