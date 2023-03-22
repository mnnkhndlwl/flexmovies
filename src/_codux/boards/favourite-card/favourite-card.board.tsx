import { createBoard } from '@wixc3/react-board';
import { FavouriteCard } from '../../../components/favourite-card/favourite-card';

export default createBoard({
    name: 'FavouriteCard',
    Board: () => (
        <FavouriteCard
            movie={{
                id: '12',
                overview:
                    'M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.',
                release_date: '2016',
                title: 'MS DHONI',
                vote_average: 5,
                poster_path:
                    'https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v',
            }}
        />
    ),
});
