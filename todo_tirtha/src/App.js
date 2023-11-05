import SmallTodo from "./components/SmallTodo";
import Counter from "./components/counter";
import ReactDrag from "./components/reactDrag";
function App() {
  return (
    <div>
      {/* <Counter/>
      <SmallTodo/> */}
      <ReactDrag cx={0} cy={0}/>
      <ReactDrag cx={500} cy={500}/>
    </div>
  );
}

export default App;
