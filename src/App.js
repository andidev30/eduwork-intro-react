// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           ini kelas react pertama saya.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// export default App;

import MyComponent from './components/functionComponents/MyComponent';
import MyComponentClass from './components/classComponents/MyComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <>
      <MyComponent title="Belajar React" color="Red" />
      <MyComponentClass title="Belajar React" color="Red" />
    </>
  )
}

export default App