import React, {Fragment} from 'react';

export const TodoItem = ({text, completed}) => (
    <p><input type="checkbox" checked={completed} /> {text}</p>
);

