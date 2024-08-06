// 할 일(Todo) 항목을 입력받는 폼을 정의하는 컴포넌트
import React from 'react'

export const TodoForm = () => {
  return (
    <form className='TodoForm'>
        <input type='text' className='todo-input' 
        placeholder='What is the task today?' />
        <button type='submit' className='todo-btn'></button>
    </form>
  )
}
