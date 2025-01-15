
import React from 'react'
import {Space, Typography } from 'antd';



const { Title } = Typography;
const { Text,Link ,Paragraph} = Typography;

const Ant = () => {
  return (
    
    <div className='mt-7  '>
        <Space direction="vertical">
        <Title  className='break-words  max-w-2xl ml-96 '> The Big Brand Theory | Carving a Spice  Trail from Tamil Nadu to 5+ Countries </Title>
     <Paragraph>
    <Text>Dindigul Thalappakatti (previously Ananda Vilas Biriyani Hotel) was established in 1957 by Mr. Nagaswami Naidu in Dindigul, Tamil Nadu. The eatery quickly gained fame for its biryani, which was inspired by his wife Kannamma’s handcrafted recipes known for their rich flavour and generous spices. Today, Dindigul Thalappakatti Biriyani stands tall and features     </Text> 
  
    <Text className='pr-15 pl-15' strong > 104 outlets across six countries,  </Text>
    <Text>each one upholding the legacy of genuine taste and variety.
</Text>
</Paragraph>
<Title  className=''> The Rich Heritage of Dindigul Thalappakatti</Title>
<Paragraph>
  <Text>Mr. Naidu’s journey began as an accountant at a leather factory.  Like many employees, he often brought his wife’s homemade meals for lunch—but his tiffin was unlike any other. The dishes were so exceptional that his colleagues just couldn’t get enough of them. Inspired by their sheer love and appreciation, the duo opened a kiosk to sell the same tasty dishes. And that’s how the very first 4-seater outlet of Dindigul Thalappakatti, which was then called Ananda Vilas Biriyani Hotel, came to be.</Text>
</Paragraph>
<Paragraph>
<Text>While working at the cash counter at the restaurant, Mr. Naidu would wear the ‘Thalappa’, a traditional headpiece typically worn by Indian men during formal occasions. He soon became known for this and earned the affectionate nickname of</Text>
<Text strong> ‘Thalappakatti Naidu.’</Text>
</Paragraph>
<Paragraph>
After Mr. Naidu’s passing, his son took over and chose to honour him by naming the brand
<Text strong>‘Dindigul Thalappakatti.’</Text>
Dindigul is currently run by Nagasamy Satish Dhanabalan, Mr. Naidu’s grandson. After completing a Hotel Management course in the UK, he returned to India with a strong resolve to expand the business globally.
</Paragraph>
<Paragraph>
Nagasamy says, <Text strong  italic >“My father was initially concerned about how people abroad would respond to our biryani because of the rich spices and one-pot cooking style. However, my mother fully supported my plans for expansion.”</Text>
</Paragraph>

<Title level={4}>From Humble Beginnings to a Global Brand</Title>
    </Space>
    <Link href="https://ant.design" target="_blank">
      Ant Design (Link)
    </Link>
        </div>
        
  )
}

export default Ant