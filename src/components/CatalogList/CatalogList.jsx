import Card from '../Card/Card.jsx';

const cardData = [
    {
        id: 1,
        img: 'https://picsum.photos/id/1/300/200',
        icon: '/public/user-icon.svg',
        title: 'The mystery of the black square',
        user: 'Vasya Pupkin',
        bid: '0.24 ETH'
    },
    {
        id: 2,
        img: 'https://picsum.photos/id/2/300/200',
        icon: '/public/user-icon.svg',
        title: 'Sunset on the horizon',
        user: 'John Doe',
        bid: '0.15 ETH'
    },
    {
        id: 3,
        img: 'https://picsum.photos/id/3/300/200',
        icon: '/public/user-icon.svg',
        title: 'Abstract Dreams',
        user: 'Alice Smith',
        bid: '0.37 ETH'
    },
    {
        id: 4,
        img: 'https://picsum.photos/id/4/300/200',
        icon: '/public/user-icon.svg',
        title: 'Cityscape at Night',
        user: 'Bob Johnson',
        bid: '0.09 ETH'
    },
    {
        id: 5,
        img: 'https://picsum.photos/id/5/300/200',
        icon: '/public/user-icon.svg',
        title: 'Nature\'s Symphony',
        user: 'Emily Brown',
        bid: '0.52 ETH'
    },
    {
        id: 6,
        img: 'https://picsum.photos/id/6/300/200',
        icon: '/public/user-icon.svg',
        title: 'The Secret Garden',
        user: 'David Wilson',
        bid: '1.20 ETH'
    },
    {
        id: 7,
        img: 'https://picsum.photos/id/7/300/200',
        icon: '/public/user-icon.svg',
        title: 'Serenity in Woods',
        user: 'Olivia Davis',
        bid: '0.85 ETH'
    },
    {
        id: 8,
        img: 'https://picsum.photos/id/8/300/200',
        icon: '/public/user-icon.svg',
        title: 'Vibrant City Life',
        user: 'Sophia Martinez',
        bid: '0.67 ETH'
    },

];


const CatalogList = () => {
    return (
        <section className='catalog-list'>
            <div className="container">
                <div className="top">
                    <h2>Catalog 🔥</h2>
                    <a href="#">View all auctions</a>
                </div>

                <div className="wrap">
                    {cardData.map(({ id, ...card }) => (
                        <Card
                            key={id}
                            {...card}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CatalogList