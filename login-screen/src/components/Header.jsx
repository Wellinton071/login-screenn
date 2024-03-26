import logoNike from '../assets/Logonike.png';
import style from './Header.module.css'

function Header(params) {
    return (
        <header>
            <img src={logoNike} className={style.logoNike} alt="" />
            <button className={style.btnHeader} type="button">Sign Up</button>
        </header>
    );
}

export default Header;