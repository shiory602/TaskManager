import InputLabel from "../components/InputLabel";

const LoginPage = () => {
  return (
    <>
      <h1>login</h1>
      <div className="main-box">
        <div className="title">
          <h3>Welcome to the task management.</h3>
        </div>
        <form>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </div>
    </>
  )
}

export default LoginPage;