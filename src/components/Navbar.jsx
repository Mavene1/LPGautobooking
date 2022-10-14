import React, {Fragment, useState} from 'react'
import {TiThMenuOutline} from 'react-icons/ti'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Navbar() {
    const [nav,setNav] = useState(true)

    const handleNav = ()=> {
        setNav(!nav)
    }
    
  return (
    <div className='border-b border-gray-300 items-center h-20 max-w-[1240px] mx-auto px-4 flex justify-between text-black'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]' >LPG</h1>
        <ul className='hidden md:flex pr-20'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Charts</li>
            <li className='p-4'>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Members
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#/1"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Mavene Omondi
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#/1"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Caroline Wahu
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#/2"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Risper Gitau
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#/3"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Collins Rotich
                                </a>
                            )}
                            </Menu.Item>
                            <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    type="submit"
                                    className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                >
                                    Brannigan Sakwah
                                </button>
                                )}
                            </Menu.Item>
                            </form>
                        </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </li>
            <li className='p-4'>
                
                <Menu as="div" className="relative inline-block text-left">
                <Menu.Button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </Menu.Button>
                    <Transition 
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#/1"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        HOME
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#/1"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        CHARTS
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>

                    </Transition>
                </Menu>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiFillCloseCircle size={20}/>:<TiThMenuOutline size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fefefe] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] pl-5 pt-5' >LPG</h1>
            <ul className=' uppercase p-4'>
                <li className='p-4 border-b border-t border-gray-300'>Home</li>
                <li className='p-4'>Charts</li>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar