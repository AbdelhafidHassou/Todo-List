export const selectTodos = (state) => state.todos.items;
export const SelectFilter = (state) => state.todos.filter;
export const selectIsAddingTodo = (state) => state.todos.isAddingTodo;

export const selectFilteredTodos = (state) => {
    const todos = state.todos.items;
    const filter = state.todos.filter;

    switch (filter) {
        case "active":
            return todos.filter((todo) => !todo.completed);
        case "completed":
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }
};

export const selectTodoStats = (state) => {
    const todos = state.todos.items;
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const active = total - completed;
    const completionPercetage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { todos, total, completed, active, completionPercetage };
}