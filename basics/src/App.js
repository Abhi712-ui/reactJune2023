
import styles from './App.module.css';

function App() {
  const name = <h1>Abhi</h1>
  return (
  <div className={styles.App}>
    <User name="abhi" lastname="sharma" age={18}/>
    <User name='panav' lastname='kothi' age={45}/>
  </div>
  );
}

const User = (props) => {
  return(
    <>
      <h1>{props.name}</h1>
      <h1>{props.lastname}</h1>
      <h1>{props.age}</h1>
    </>
  );
}

export default App;
