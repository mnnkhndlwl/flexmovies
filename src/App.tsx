import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favourite } from './components/favourite/favourite';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <Container />
            <Favourite />
        </div>
    );
}

export default App;
