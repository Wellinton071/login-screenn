import style from './Welcome.module.css'

function Welcome(params) {
    return(
        <section className={style.welcome}>
          <h1>Log In</h1>
          <p>Enter your credential to access your account.</p>
        </section>
    );
}

export default Welcome;