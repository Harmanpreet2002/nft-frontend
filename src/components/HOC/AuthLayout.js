import { Outlet } from 'react-router-dom';
import auth_layout_style from '../../assets/styles/auth/layout.module.css';

function AuthLayout() {
    return (
        <div className={auth_layout_style.auth_layout_container}>
            <Outlet></Outlet>
        </div>
    )
}

export default AuthLayout;