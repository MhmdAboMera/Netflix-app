import "./formLogin.css";
function FormLogin() {
  return (
    <div className="form-login">
      <form>
        <h2>Sign In</h2>
        <div className="mb-4">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email Or phone Number"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="submit"
            id="inputsubmit"
            className="form-control"
            aria-describedby="submitHelpBlock"
            required
            value={"Sign In"}
          />
        </div>
        <div className="mb-3 Remember">
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label text-white-50"
              htmlFor="flexCheckDefault"
            >
              Remember Me
            </label>
          </div>
          <button className="text-white-50">Need help?</button>
        </div>
      </form>
      <div className="text-login">
        <p className="text-white-50">
          New to Netflix? <button>Sign up now.</button>
        </p>
        <p className="text-white-50">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <button> Learn more.</button>
        </p>
      </div>
    </div>
  );
}
export default FormLogin;
