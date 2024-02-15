import { Outlet } from 'react-router-dom';
import draft_layout_style from '../../assets/styles/draft/layout.module.css';

function DraftLayout() {
    return (
        <div className={draft_layout_style.auth_layout_container}>
            <Outlet></Outlet>
        </div>
    )
}

export default DraftLayout;