import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: var(--orange-gradient);
    overflow: hidden;
`

function CollectionLayout() {
    return (
        <Layout> 
            <Outlet></Outlet>
        </Layout>
    )
}

export default CollectionLayout;