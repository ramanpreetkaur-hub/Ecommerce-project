import React from 'react';
import project from "../assets/project.png";
// import { UseGrocery } from "./Customhook";
import { Card } from 'antd';

const { Meta } = Card;


const EcommerceBody: React.FC<EcommerceBodyProps> = () => {
  
    
    

    return (
        <div>
            
            <div className="relative">
                <img className="w-[117vh]" src={project} alt="Groceries" />
                <div className="absolute top-64 right-0 pr-60 ">
                    <p className="text-4xl font-bold text-right">
                        Fresh Groceries
                        <span className="text-black bg-orange-200 rounded-md border-orange-200 border-2 px-2">
                            Delivered
                        </span>
                        <br />
                    </p>
                    <p className="text-4xl font-bold text-right">
                        To Your Door Step.
                    </p>
                    <br />
                    <p className="right-15 mr-3 pr-3 absolute">
                        "Say goodbye to the hassle of grocery shopping! <br />
                        At [mega grocery shop], we bring the freshest <br />
                        produce, pantry staples, and household essentials <br />
                        straight to your doorstep. With just a few clicks, you can <br />
                        enjoy quality, fast delivery, and unbeatable convenience. <br />
                        Whether it’s stocking up on weekly essentials or satisfying  <br />
                        last-minute cravings, we’ve got you covered. Handpicked with care  <br />
                        and delivered with love, our groceries are here to make your life easier.– <br />
                        Shop now and experience the future  of grocery shopping: simple,  <br/>
                        fresh, and stress-free!"
                    </p>
                </div>
            </div>
          <div className='flex gap-7 pt-16 mt-28 pr-4 pl-10 bg-orange-200'>
            <Card
    hoverable
    style={{ width: 350 }}
    cover={<img alt="example" className='w-[50vh] h-[36vh]'  src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/classical-vibrant-living-room-with-wall-niches-and-chandelier/living-room-modern-wall-design.jpg.transform/bh-gallery-listing/image.webp" />}
  >
    <Meta title="Home & Living" description=" Good Quality And Prices" />
  </Card>
  <Card
    hoverable
    style={{ width: 350}}
    cover={<img alt="example" className='w-[50vh] h-[36vh]' src="https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=" />}
  >
    <Meta title="Grocery products" description = "Good Quality And Prices"  className='hover:text-black'/>
  </Card>
  <Card
    hoverable
    style={{ width: 350}}
    cover={<img alt="example"className='w-[50vh] h-[36vh]'  src="https://hulaglobal.com/wp-content/uploads/2022/08/Hula-global-fashion-summer-guide.jpg" />}
  >
    <Meta title="Fashionable clothes" description="Good Quality And Prices" />
  </Card>
  <Card
    hoverable
    style={{ width: 350}}
    cover={<img alt="example" className='w-[50vh] h-[36vh] hover:focus:max-2xl::'  src="https://t3.ftcdn.net/jpg/05/49/64/72/360_F_549647295_5AAhVVZV6DAcyejzZ8OwfaNnwWOtOR42.jpg" />}
  >
    <Meta title="Electronic gadgets" description="Good Quality And Prices" />
  </Card>
  </div>     
        </div>
    );
};

export default EcommerceBody;
