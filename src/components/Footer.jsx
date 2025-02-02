import React from 'react'
import {FaDribbble, FaFacebook, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa'
//import Logo from '../assets/image.jpg'
import PropaneTankIcon from '@mui/icons-material/PropaneTank';

function Footer() {
  return (
    <div>
    <div name='footer' className='bg-black w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
        <div>
            <h1 className='my-2 flex w-full text-3xl font-bold text-[#00df9a]'><PropaneTankIcon className='mt-[6px]'/>Digi Cylinders</h1>
            <p className='py-4'>Our solution aims to solve the problem of how to measure the remaining LPG cylinder levels and notifies the user when it is depleted; and allows the user to remotely book a new cylinder for door-delivery.</p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaGithub size={30}/>
                <FaDribbble size={30}/>
                <FaFacebook size={30}/>
                <FaTwitter size={30}/>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 mt-6 flex justify-between mx-2 md:mx-20'>
        <div>
                <h6 className='font-medium text-gray-400 uppercase'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 uppercase'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul></div>
            {/* <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                    
                </ul>
            </div> */}
            
            <div class="">
                <h6 class="text-gray-400 uppercase font-medium mb-2 flex justify-center md:justify-start">
                Contact
                </h6>
                <p class="text-sm flex justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                    class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                    </path>
                </svg>
                Nairobi, KE.
                </p>
                <p class=" text-sm flex justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                    class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                    </path>
                </svg>
                info@lpg.com
                </p>
                <p class="text-sm flex  justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                    class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                    </path>
                </svg>
                07 234 567 88
                </p>
                <p class="text-sm flex justify-start">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
                    class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                    d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
                    </path>
                </svg>
                07 234 567 85
                </p>
            </div>
        </div>
        
    </div>
        <div className="w-max-[1240px] mx-auto text-center p-6 bg-black">
            <span className='text-white'>© 2022 Copyright: </span>
            <a className="text-gray-400 font-bold" href="#1">Digi Cylinders</a>
        </div>
    </div>
  )
}

export default Footer