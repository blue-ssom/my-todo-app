// TodoForm 컴포넌트를 포함하는 컴포넌트. 주로 다른 할 일 관련 컴포넌트들을 감싸기 위한 컨테이너 역할
import React from 'react'
import { TodoForm } from './TodoForm'

export const TodoWrapper = () => {
  return (
    <div>
      <TodoForm />
    </div>
  )
}
