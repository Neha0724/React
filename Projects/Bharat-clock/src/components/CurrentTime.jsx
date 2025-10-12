let CurrentTime = () => {

  let time = new Date();
  return (
  <p className="lead">This is the current Time: <b>{time.toLocaleDateString()}-
  {""}{time.toLocaleTimeString()} </b>
   </p>
  )
}
export default CurrentTime;