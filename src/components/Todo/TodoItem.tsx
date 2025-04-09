import React from "react";
import {Task} from "../../common/types";
import styles from "../../common/styles/TodoItem.module.scss";

type ItemProps = {
    todo: Task,
    toggleTask: (id: number) => void,
    removeTask: (id: number) => void,
}

const TodoItem: React.FC<ItemProps> = ({todo, toggleTask, removeTask}) => {

    return (
        <div className={styles.item}>
            <div className={`${styles.label} ${todo.completed ? styles.completed : styles.active}`}
                 onClick={() => toggleTask(todo.id)}>
                {todo.text}
            </div>
            <div onClick={() => removeTask(todo.id)}>х</div>
        </div>
    )
}

export default TodoItem
