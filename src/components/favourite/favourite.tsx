import styles from './favourite.module.scss';
import classNames from 'classnames';

export interface FavouriteProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favourites-and-templates
 */
export const Favourite = ({ className }: FavouriteProps) => {
    return <div className={classNames(styles.root, className)}>Favourite</div>;
};
