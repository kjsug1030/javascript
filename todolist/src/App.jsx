import { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './Item';

function App() {
  const [todo, setTodo] = useState('');
  const localData = JSON.parse(localStorage.getItem('todos'));
  const [todolist, setTodoList] = useState(localData || []);
  const [isChecked, setChecked] = useState(false);

  const onChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (todo === '') return;
    if (todolist.length >= 10) {
      return alert('오늘의 TodoList 한도를 초과했습니다.');
    } else {
      setTodoList(currentArray => [{ id: Math.random(), todo: todo, isChecked: isChecked }, ...currentArray]);
    }
    setTodo('');
  };

  const onDelete = idx => {
    setTodoList(todolist.filter(item => item.id !== idx));
  };

  const onClick = idx => {
    setChecked(!isChecked);
    // 체크표시할 인덱스를 찾는다.
    const findIndex = todolist.findIndex(item => item.id === idx);
    const copiedTodolist = [...todolist];
    copiedTodolist[findIndex].isChecked = !isChecked;
    setTodoList(copiedTodolist);
  };

  const onChecked = isChecked => {
    return isChecked ? 'checked' : '';
  };

  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) {
      setTodoList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todolist));
  }, [todolist]);

  return (
    <>
      <GlobalStyles />
      <TodoListWrapper>
        <h1>TodoList</h1>
        <Form onSubmit={onSubmit}>
          <Form.Control
            type='text'
            maxLength={15}
            size='lg'
            value={todo}
            onChange={onChange}
            placeholder='오늘의 할일을 입력하세요'
          />
        </Form>
        <ul>
          {todolist &&
            todolist.map(item => (
              <TodoItem
                item={item.todo}
                key={item.id}
                onDelete={() => onDelete(item.id)}
                onClick={() => onClick(item.id)}
                isChecked={onChecked(item.isChecked)}
              />
            ))}
        </ul>
      </TodoListWrapper>
    </>
  );
}

export default App;

const TodoListWrapper = styled.div`
  width: 500px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);

  h1 {
    font-weight: bold;
  }

  .form-control {
    opacity: 0.7;
  }

  ul {
    padding: 0;
    height: 22px;
  }
`;
