import styles from './favourite-card.module.scss';
import classNames from 'classnames';

export interface FavouriteCardProps {
    className?: string;
    movie: {
        id: string;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favourite-cards-and-templates
 */
export const FavouriteCard = ({ className, movie }: FavouriteCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={movie.poster_path} className={styles.fimg} />
            <div className={styles.detail}>
                <h1>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div className={styles.delete}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rYFrrZi0qLPnrzY6aUQoNcJHppkqKs7ZG6kotcNTt8LA2sol5_YScsMZqEEhOCeSlBk&amp;usqp=CAU"
                    className={styles.deleicon}
                />
            </div>
        </div>
    );
};
