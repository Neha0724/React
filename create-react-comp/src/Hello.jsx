function Hello() {
  
  let myName = 'Neha';
  let fullName = () =>{
    return 'Neha Tated';
  }

  return <h3>
    Hello, This is {fullName()}. I'm learning the react.
  </h3>
}
export default Hello;