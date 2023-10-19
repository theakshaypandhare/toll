import "./login.scss"
const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>
                        Hello
                        world!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas deleniti molestias, eum maxime nemo laudantium quod ea, vitae quidem placeat, facere velit tenetur dolorem veniam possimus assumenda magnam nihil!
                    </p>
                    <span>
                        dont you have account?
                    </span>
                    <button>
                        Register
                    </button>
                </div>
                <div className="right">
                    <h1>
                        Login
                    </h1>
                    <form action="">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;