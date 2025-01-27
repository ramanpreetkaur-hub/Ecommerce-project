import React from 'react';

import GetData from './GetData';
import { Card } from 'antd';
import Carousel from './Carousel'; 

const { Meta } = Card;

const EcommerceBody: React.FC = () => {
  return (
    <div>
      <Carousel />  {/* Carousel component */}

      <div className='flex gap-7 pt-16 mt-28 pr-4 pl-10 bg-gray-100'>
        {/* Product Cards */}
        <Card
          hoverable
          style={{ width: 350 }}
          cover={<img alt="Home & Living" className='w-[50vh] h-[36vh]' src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/classical-vibrant-living-room-with-wall-niches-and-chandelier/living-room-modern-wall-design.jpg.transform/bh-gallery-listing/image.webp" />}
        >
          <Meta title="Home & Living" description="Good Quality And Prices" />
        </Card>

        <Card
          hoverable
          style={{ width: 350 }}
          cover={<img alt="Grocery products" className='w-[50vh] h-[36vh]' src="https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=" />}
        >
          <Meta title="Grocery products" description="Good Quality And Prices" />
        </Card>

        <Card
          hoverable
          style={{ width: 350 }}
          cover={<img alt="Fashionable clothes" className='w-[50vh] h-[36vh]' src="https://hulaglobal.com/wp-content/uploads/2022/08/Hula-global-fashion-summer-guide.jpg" />}
        >
          <Meta title="Fashionable clothes" description="Good Quality And Prices" />
        </Card>

        <Card
          hoverable
          style={{ width: 350 }}
          cover={<img alt="Electronic gadgets" className='w-[50vh] h-[36vh]' src="https://t3.ftcdn.net/jpg/05/49/64/72/360_F_549647295_5AAhVVZV6DAcyejzZ8OwfaNnwWOtOR42.jpg" />}
        >
          <Meta title="Electronic gadgets" description="Good Quality And Prices" />
        </Card>
      </div>
    
      <GetData />

    </div>
  );
};

export default EcommerceBody;
