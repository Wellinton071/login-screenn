import logoNike from '../assets/Logonike.png';
import style from './Header.module.css'

function Header(params) {
    return (
        <header>
            <img src={logoNike} className={style.logoNike} alt="" />
            <h1>Welcome Back</h1>
            <p>Please enter your details to sing in.</p>
        </header>
    );
}

export default Header;