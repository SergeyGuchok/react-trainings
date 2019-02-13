import React, {Component} from 'react';
import {TodoItem} from './todo-item';

export const TodoList = ({todoItems}) => (
    <div>
        <p>Hi i`m todo list</p>
        {
            todoItems.map(item => (
                <TodoItem 
                    key={item.id} 
                    text={item.text}
                    completed={item.completed}
                />
            ))
        }
    </div>
);
