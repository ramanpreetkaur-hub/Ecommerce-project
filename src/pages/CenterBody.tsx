import {useState}from 'react'

const CenterBody = () => {
    const [text, setText] = useState('dope!');

  const MouseEnter = () => {
    setText('beautiful.');
  };

  const MouseLeave = () => {
    setText('dope!');
  };
  return (
    <div><div className='  relative bg-red-100'>
    <img src="https://nevo.themevillain.com/assets/images/backgrounds/5.png" alt="" className="z-50"/>
    <div className='absolute top-0 left-20  mt-52 p-8'>
      <div className='text-black text-7xl font-serif font-semibold'>We make </div> <br />
      <div className='text-black text-7xl font-serif font-semibold gap-1'>things   <span 
            className="text-red-400" 
            onMouseEnter={MouseEnter} 
            onMouseLeave={MouseLeave}
            // onMouseMove={Mousemove}
          >
            {text}
          </span>
        </div>
        <br />
      <div className='bg-black p-2 w-36 ml-44 text-white hover:bg-slate-400'><button >See.Believe.</button></div>
    </div>
  </div>
  
        {/* bg finish */}
        {/* body1 nav start   */}
        <div className='flex justify-between gap-10 items-center '>
        <div className='m-3 text-lg font-semibold '>Selected  work</div>
        <div className='flex gap-10 m-6 hover:text-slate-500 cursor-pointer'>
          <div className=''> All </div>
          <div className=''>Design </div> 
         <div className=''>  Branding </div>
          <div className=''> Packaging </div>
        </div>
  
        </div>
         {/* body1 nav end  */}
        {/* body1 image start */}
        
        <div className="bg-white w-full max-w-8xl p-5 pb-10 mx-auto mb-10 gap-5  columns-3 space-y-5">
      
     <div> <img src="https://nevo.themevillain.com/assets/images/work/va-academy/5.jpg" alt="bag" className=' '  /></div>
     <div>  <img src="https://nevo.themevillain.com/assets/images/work/harrys-2/17.jpg" alt="products"  className=' '/></div>
  
     <div >  <img src="https://nevo.themevillain.com/assets/images/work/logos/3.jpg" alt="picture" className='' /></div>
     <div>  <img src="https://nevo.themevillain.com/assets/images/blog/1.jpg" alt="  " className='' /></div>
     <div> <img src="https://nevo.themevillain.com/assets/images/work/full-moon/7.jpg" alt="t-shirt" className=''  /></div>
  
     <div>  <img src="https://nevo.themevillain.com/assets/images/work/sequential/1.jpg" alt="" className='' /></div>
  
  
    
     <div> <img src="https://nevo.themevillain.com/assets/images/work/logos/18.jpg" alt="" className=' ' /></div>
  </div>
    
  
  
      
        {/* body1 image end */}
         {/* body2 image start */}
          <div className='bg-[#F7F7F7] gap-3 pt-5 m-0 p-0 pb-5'>
     
  
          <button className='text-6xl font-serif transition-colors ease-in-out duration-700 hover:bg-transparent rounded-lg hover:text-pink-700'>it is true.</button> 
            <div className='text-3xl text-slate-400 font-semibold'>Small things make you big</div>
  
            <div className='flex justify-center mt-6  min-h-max'><img src="https://nevo.themevillain.com/assets/images/blog/9.jpg" alt="" /></div>
            <div className=' text-2xl text-slate-400'>We're a team of experts, striving long term solutions.</div> <div className='text-2xl text-slate-400'> We think big and take on every challenge that comes across </div> <div className='text-2xl text-slate-400'>our path.</div>
          </div>
          
         
         {/* body2 image end */}
  
          {/* body2 image start */}
           <div className='bg-[#1D1E20] h-[230vh] mr-2 mb-9'>
            <div className=' w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center p-0 gap-0 py-0 columns-3 pr-7 pl-7 pb-9 pt-7  '>
            <div className='hover:ease-in-out ' > <img src="https://nevo.themevillain.com/assets/images/team/1.jpg" alt="" className='h-[96vh]' /></div>
            <div><img src="https://nevo.themevillain.com/assets/images/team/1b.jpg" alt=""  className='h-[96vh]'/></div>
            <div className='top-2'><img src="https://nevo.themevillain.com/assets/images/team/2.jpg" alt="" className='h-[96vh]' /></div>
            <div><img src="https://nevo.themevillain.com/assets/images/team/2b.jpg" alt="" className='h-[97vh] ' /></div>
            <div><img src="https://nevo.themevillain.com/assets/images/team/3.jpg" alt=""className='h-[97vh]' /></div>
            <div> <img src="https://nevo.themevillain.com/assets/images/team/3b.jpg" alt="" className='h-[97vh] top-4' /></div>
          
            </div>
            <div className='text-2xl text-white text-center flex flex-col justify-center items-center mt-20 '> <div className=''>We're a team of skilled </div>
             <span> individuals, always striving for </span>
            <span>   the best solution. We think big,  </span>
           < span>    and make clients successful.</span></div>
           </div>
  
  
           {/* body2 image end */}</div>
  )
}

export default CenterBody