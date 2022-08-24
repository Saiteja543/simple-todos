// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteItem} = props

  const {title, id} = todoDetails

  const onDelete = () => deleteItem(id)

  return (
    <li className="todoItems-container">
      <p className="todo-Item-Name">{title}</p>
      <button className="delete-btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem