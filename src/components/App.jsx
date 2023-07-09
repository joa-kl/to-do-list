
import { StatusFilter } from "./StatusFilter";
import { TaskList } from "./TaskList/TaskList";
import css from "./App.module.css";
import { TaskForm } from "./TaskForm/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading, getTasks } from "redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "redux/operations";
import { TaskCounter } from "./TaskCounter/TaskCounter";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  // return (
  //   <div>
  //     {isLoading && <h1>Loading</h1>}
  //     {error && <p>{error}</p>}

  //     <div>
  //       {items.length > 0 && JSON.stringify(items)}
  //     </div>
  //   </div>
  // )
  return (
    <div>
      {isLoading && !error && <h4>Loading...</h4>}
      {error}
      <header className={css.wrapper}>
        <section className={css.section}>
          <h2 className={css.title}>Tasks</h2>
          <TaskCounter />
        </section>
        <section className={css.section}>
          <h2 className={css.title}>Filter by status</h2>
          <StatusFilter />
        </section>
      </header>
      <TaskForm />
      <TaskList />
    </div>
    )
};

export default App;
