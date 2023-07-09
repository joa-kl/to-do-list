
import { StatusFilter } from "./StatusFilter";
import { TaskList } from "./TaskList/TaskList";
import css from "./App.module.css";
import { TaskForm } from "./TaskForm/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "redux/operations";
// import { TaskCounter } from "./TaskCounter/TaskCounter";

export const App = () => {

  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTask);

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {error && <p>{error}</p>}

      <div>
        {items.length > 0 && JSON.stringify(items)}
      </div>
    </div>
  )
  return (
    <div>
      <header className={css.wrapper}>
        <section className={css.section}>
          <h2 className={css.title}>Tasks</h2>
          {/* <TaskCounter /> */}
        </section>
        <section className={css.section}>
          <h2 className={css.title}>Filter by status</h2>
          <StatusFilter />
        </section>
      </header>
      <TaskForm/>
      <TaskList />
    </div>
    )
};

export default App;
