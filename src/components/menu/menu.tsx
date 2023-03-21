import styles from './menu.module.scss';
import classNames from 'classnames';
import tv from './tv.png';

export interface MenuProps {
    className?: string;
}

const sortBy: string[] = ['Popularity', 'Most Voted', 'Release Date'];
const genre: string[] = ['Comedy', 'Sci-fi', 'Horror'];
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src={tv} className={styles.logoimg} />
                <span className={styles.logoText}>FlexMovies</span>
            </div>
            <span className={styles.title}>
                Sort By
                <hr />
            </span>
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li className={styles.listitem} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>
                Genre
                <hr />
            </span>
            <ul className={styles.list}>
                {genre.map((item) => (
                    <li className={styles.listitem} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
