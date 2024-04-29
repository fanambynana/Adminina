import { Create, Datagrid, EmailField, List, ReferenceField, TextField } from 'react-admin';

export const CommentList = () => (
    <List>
        <Datagrid rowClick="show" >
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);

import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled={true} />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled={true} />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);

import { Show, SimpleShowLayout } from 'react-admin';

export const CommentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </SimpleShowLayout>
    </Show>
);