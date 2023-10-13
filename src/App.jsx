import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold underline">Hello world!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi
        voluptatum sequi itaque placeat totam fuga est illum tempora eligendi
        magni optio provident error in pariatur cum fugiat, qui ratione.
      </p>
    </div>
  );
}

export default App;
