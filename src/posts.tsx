import { Create, Datagrid, List, ReferenceField, TextField } from 'react-admin';
import { useRecordContext } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid rowClick="show">
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="id" />
            <TextField source="title" />
            <CommentButton/>
        </Datagrid>
    </List>
);

import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" disabled={true} />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled={true} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

import { Show, SimpleShowLayout } from 'react-admin';
//import { CommentList } from './comment';

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <CommentButton/>
        </SimpleShowLayout>
    </Show>
);

import { useRedirect } from 'react-admin';
import Button from '@mui/material/Button';

const CommentButton = () => {
    const redirect = useRedirect();
    const record = useRecordContext();
    const handleClick = () => {
        redirect(`/comments/?filter=${JSON.stringify({ postId: record.id })}`);
    }
    return <Button color='primary' onClick={handleClick}>Comments</Button>;
};
