'use client';
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {IoCall} from "react-icons/io5";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";


export default function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <div className="absolute Voigante flex justify-center flex flex-col gap-2 w-full top-[2rem]  ">
                <div className="flex justify-between sm:px-24 px-4 sm:w-[95%] z-[9999999999999]">
                    <div className="flex gap-2 items-center">
                        <IoCall className="text-2xl bg-[#E2CEAB] p-1 text-[#241411] rounded-full"/>
                        <p>Call Us: 615-380-1111</p>
                    </div>
                    <div className="flex gap-4">
                        {/* Facebook Link */}
                        <Link href="https://www.facebook.com/RiddleTheCity" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="rounded-full text-black p-1 text-2xl bg-[#E2CEAB]"/>
                        </Link>
                        {/*<FaTwitter className="  rounded-full text-black p-1  text-2xl bg-[#E2CEAB]"/>*/}
                        <Link href="https://www.instagram.com/riddlethecity" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className=" rounded-full text-black p-1  text-2xl bg-[#E2CEAB]"/>
                        </Link>

                    </div>
                </div>
                <div style={{
                    background: 'url("/images/layout/navbar.png")',
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: 'cover'
                }}
                     className="flex Voigante flex-col xl:hidden gap-4 z-[9999999999999] relative px-8 min-w-[85%] py-4 m-auto items-center justify-center">
                    <div className="flex justify-center">
                        <Image
                            src={"/images/layout/riddleNavbar.png"}
                            alt="riddle logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex gap-4 flex-wrap justify-center ">
                        <div className="flex gap-[1.5rem] flex-wrap  sm:gap-16 items-center">
                            {pathname == '/' ?
                                <div className="w-max h-max relative">
                                    <Image src={'/images/layout/Group 10.svg'}
                                           className="w-full h-full object-contain absolute z-[-1]" alt="link"
                                           width={100} height={100}/>
                                    <Link className="px-4" href={'/'}>Home</Link>
                                </div> :
                                <Link className=" px-4 " href={'/'}>Home</Link>}
                            {pathname == `${process.env.NEXT_PUBLIC_BASEURL}/#packages` ?
                                <div className="w-max h-max relative">
                                    <Image src={'/images/layout/Group 10.svg'}
                                           className="w-full h-full object-contain absolute z-[-1]" alt="link"
                                           width={100} height={100}/>
                                    <Link className="px-4"
                                          href={`${process.env.NEXT_PUBLIC_BASEURL}/#packages`}>Packages</Link>
                                </div> :
                                <Link className=" px-4 "
                                      href={`${process.env.NEXT_PUBLIC_BASEURL}/#packages`}>Packages</Link>}
                            {pathname == '/listings' ?
                                <div className="w-max h-max relative">
                                    <Image src={'/images/layout/Group 10.svg'}
                                           className="w-full h-full object-contain absolute z-[-1]" alt="link"
                                           width={100} height={100}/>
                                    <Link className="px-4" href={'/listings'}>Breweries</Link>
                                </div> :
                                <Link className=" px-4 " href={'/listings'}>Breweries</Link>}
                            {/* {pathname == '/treasure-hunt' ?
                <div className="w-max h-max relative">
                  <Image src={'/images/layout/Group 10.svg'} className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100} height={100} />
                  <Link className="px-4" href={'/treasure-hunt'}>Treasure Hunt</Link>
                </div> :
                <Link className=" px-4 " href={'/treasure-hunt'}>Treasure Hunt</Link>} */}
                            {/* {pathname == '/riddles' ?
                <div className="w-max h-max relative">
                  <Image src={'/images/layout/Group 10.svg'} className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100} height={100} />
                  <Link className="px-4" href={'/riddles'}>Riddles</Link>
                </div> :
                <Link className=" px-4 " href={'/riddles'}>Riddles</Link>} */}
                            {/* {pathname == '/booking' ?
                <div className="w-max h-max relative">
                  <Image src={'/images/layout/Group 10.svg'} className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100} height={100} />
                  <Link className="px-4" href={'/booking'}>Booking</Link>
                </div> :
                <Link className=" px-4 " href={'/booking'}>Booking</Link>} */}
                            {pathname == `/about` ?
                                <div className="w-max h-max relative">
                                    <Image src={'/images/layout/Group 10.svg'}
                                           className="w-full h-full object-contain absolute z-[-1]" alt="link"
                                           width={100} height={100}/>
                                    <Link className="px-4" href={`/about`}>About</Link>
                                </div> :
                                <Link className=" px-4 " href={`/about`}>About</Link>}
                            {pathname == '/contact' ?
                                <div className="w-max h-max relative">
                                    <Image src={'/images/layout/Group 10.svg'}
                                           className="w-full h-full object-contain absolute z-[-1]" alt="link"
                                           width={100} height={100}/>
                                    <Link className="px-4" href={'/contact'}>Contact</Link>
                                </div> :
                                <Link className=" px-4 " href={'/contact'}>Contact</Link>}
                            <Link className=" px-4 " href={'/auth/login'}>Login</Link>
                        </div>

                    </div>
                </div>
                <div
                    style={{
                        background: 'url("/images/layout/navbar.png")',
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'contain'
                    }}
                    className="hidden Voigante gap-16 px-0 xl:flex z-[9999999999999] relative min-w-[85%] py-1 m-auto items-center justify-center"
                >
                    <div className="flex gap-8 items-center">
                        {pathname == '/' ?
                            <div className="w-max h-max relative">
                                <Image src={'/images/layout/Group 10.svg'}
                                       className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100}
                                       height={100}/>
                                <Link className="px-4" href={'/'}>Home</Link>
                            </div> :
                            <Link className=" px-4 " href={'/'}>Home</Link>}
                        {pathname == `${process.env.NEXT_PUBLIC_BASEURL}/#packages` ?
                            <div className="w-max h-max relative">
                                <Image src={'/images/layout/Group 10.svg'}
                                       className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100}
                                       height={100}/>
                                <Link className="px-4"
                                      href={`${process.env.NEXT_PUBLIC_BASEURL}/#packages`}>Packages</Link>
                            </div> :
                            <Link className=" px-4 "
                                  href={`${process.env.NEXT_PUBLIC_BASEURL}/#packages`}>Packages</Link>}
                        {pathname == '/listings' ?
                            <div className=" h-max relative">
                                <Image src={'/images/layout/Group 10.svg'}
                                       className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100}
                                       height={100}/>
                                <Link className="px-4" href={'/listings'}>Breweries</Link>
                            </div> :
                            <Link className=" px-4 " href={'/listings'}>Breweries</Link>}
                        {/* {pathname == '/treasure-hunt' ?
              <div className="w-max h-max relative">
                <Image src={'/images/layout/Group 10.svg'} className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100} height={100} />
                <Link className="px-4" href={'/treasure-hunt'}>Treasure Hunt</Link>
              </div> :
              <Link className=" px-4 " href={'/treasure-hunt'}>Treasure Hunt</Link>} */}
                    </div>
                    <div>
                        <Image
                            src={"/images/layout/riddleNavbar.png"}
                            alt="riddle logo"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="flex gap-8 items-center">
                        {/* {pathname == '/riddles' ?
              <div className="w-max h-max relative">
                <Image src={'/images/layout/Group 10.svg'} className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100} height={100} />
                <Link className="px-4" href={'/riddles'}>Riddles</Link>
              </div> :
              <Link className=" px-4 " href={'/riddles'}>Riddles</Link>} */}
                        {/* {pathname == '/booking' ?
              <div className="w-max h-max relative">
                <Image src={'/images/layout/Group 10.svg'} className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100} height={100} />
                <Link className="px-4" href={'/booking'}>Booking</Link>
              </div> :
              <Link className=" px-4 " href={'/booking'}>Booking</Link>} */}
                        {pathname == `/about` ?
                            <div className="w-max h-max relative">
                                <Image src={'/images/layout/Group 10.svg'}
                                       className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100}
                                       height={100}/>
                                <Link className="px-4" href={`/about`}>About</Link>
                            </div> :
                            <Link className=" px-4 " href={`/about`}>About</Link>}
                        {pathname == '/contact' ?
                            <div className="w-max h-max relative">
                                <Image src={'/images/layout/Group 10.svg'}
                                       className="w-full h-full object-contain absolute z-[-1]" alt="link" width={100}
                                       height={100}/>
                                <Link className="px-4" href={'/contact'}>Contact</Link>
                            </div> :
                            <Link className=" px-4 " href={'/contact'}>Contact</Link>}
                        <Link className=" px-4 " href={'/auth/login'}>Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

// Pipeline test