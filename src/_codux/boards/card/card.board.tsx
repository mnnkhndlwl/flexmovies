import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: '123',
                overview:
                    "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans",
                release_date: '2000',
                title: 'Avatar',
                vote_average: 4.9,
                poster_path: 'https://static.toiimg.com/photo/msid-5348868/5348868.jpg?26276',
            }}
        />
    ),
});
