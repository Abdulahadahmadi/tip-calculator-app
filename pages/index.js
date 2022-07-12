import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>  
    <div className='flex justify-center items-center mt-16'>
        <Image className='' src='/static/images/logo.svg' alt='Tip Calculator' width={50} height={50} ></Image>
    </div>

    {/* start of form */}
    <div className=' bg-white p-4 my-2 rounded-md md:mx-28 lg:mx-56 xl:mx-96'>
      <div className=''>
        <form>
          <span className='text-md'>Bill</span>
          <input type='text' className='mt-1 w-full p-2 outline-teal-500 bg-cyan-100 rounded-md mb-6' placeholder='$'></input>
          <span className='text-md mb-4'>Select Tip %</span>
          <div className='grid grid-cols-2 gap-2 md:grid-cols-3 mt-2 lg:text-md xl:text-xl'>
            <button className='p-2 bg-teal-700 rounded-md text-white px-4 py-2 font-mono hover:bg-teal-500' type='button'>5 %</button>
            <button className='p-2 bg-teal-700 rounded-md text-white px-4 py-2 font-mono hover:bg-teal-500' type='button'>10 %</button>
            <button className='p-2 bg-teal-700 rounded-md text-white px-4 py-2 font-mono hover:bg-teal-500' type='button'>15 %</button>
            <button className='p-2 bg-teal-700 rounded-md text-white px-4 py-2 font-mono hover:bg-teal-500' type='button'>25 %</button>
            <button className='p-2 bg-teal-700 rounded-md text-white px-4 py-2 font-mono hover:bg-teal-500' type='button'>50 %</button>
            <input type='text' className='outline-teal-500 bg-cyan-100 p-1 w-full h-10 rounded-md placeholder:text-xs placeholder:text-center' placeholder='Custom'></input>
          </div>
          <div className='mt-6'>
            <span className='mt-4'>Number of People</span>
            <input type='text' className='mt-1 w-full p-2 outline-teal-500 bg-cyan-100 rounded-md mb-6' placeholder='$'></input>
          </div>
        </form>
      </div>
      <div>
      
      {/* result component  */}

        <div className='bg-teal-800 text-white p-6'>
            <div>
              <div className='flex flex-row justify-between'>
                <p>Tip Amount</p>
                <span>$0.00</span>
              </div>
              <div className='text-xs opacity-70'>
                <span>/  person</span>
              </div>
            </div>

            <div className='flex flex-row justify-between mt-8'>
                <p>Total</p>
                <span>$0.00</span>
              </div>
              <div className='text-xs opacity-70'>
                <span>/  person</span>
              </div>
            </div>

            
      </div>
    </div>
    </div>
  )
}
