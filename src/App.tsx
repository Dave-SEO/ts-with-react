import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloWorld'
import HooksMessage from './components/hook'
import MouseMove from './components/mouseMove'
import auseMouseFn from './components/hooks/useMouseMove'
import useLoaderImg from './components/hooks/useUrlLoad'
interface ImesgInterface{
  message: string,
  status: string
}
const App:React.FC =() => {
  const position = auseMouseFn()
  const [data, loading] = useLoaderImg('https://dog.ceo/api/breeds/image/random')
  const result = data as ImesgInterface
  console.log('result', result,loading )
  return (
    <div className="App">
      <header className="App-header">
          <HelloWorld message ='dsa'  />
          <HooksMessage />
          <MouseMove />
        <p>x:{position.x}, y:{position.y}</p>
      </header>
    </div>
  );
}

export default App;
