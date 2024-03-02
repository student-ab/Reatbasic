import "./App.css";
import Card from "./component/Card";

function App() {
  let obj = {
    css: "tailwind",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        {obj.css} + {obj.age}{" "}
      </h1>
      <Card channel="chaiaurcode" btn="clickfirst"></Card>
      <Card channel="chai" btn="clicksecond">
        {" "}
      </Card>
    </>
  );
}

export default App;
