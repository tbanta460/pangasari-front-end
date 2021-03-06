import React from 'react';

// Components
import { Gap, Image } from '../../index.js';

// Assets
import { IconFacebook, IconInstagram, IconTwitter } from '../../../assets'


const Footer = () => {
    const tautan = ["Tentang Kami", "Kontak", "Biaya", "Pembelajaran", "Ekskul", "Pencapaian"];
    const followUs = [IconFacebook, IconInstagram, IconTwitter];
    return(
        <>
            <div className="bg-blue">
                <div className="p-14 text-white ">
                    <span>Pintasan Tautan</span>
                    <Gap WH="h-10"/>
                    <div>
                        <ul className="flex md:flex-row flex-col ">
                            {
                                tautan.map((data, index) => {
                                    return (
                                            <div key={index}>
                                           <li className="cursor-pointer hover:text-navy" keu={index}><span>{data}</span></li>
                                           <Gap WH="w-8"/>
                                            </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="px-14">
                    <span className="text-white">Ikuti Kami</span>
                    <Gap WH="h-5"/>
                    <div>
                        <ul className="flex flex-row">
                            {
                                followUs.map((data,index) => {
                                    return (
                                            <div key={index} className="mx-4">
                                            <li>
                                                <Image src={data} alt="icon social media" Stylee="w-10 cursor-pointer"/>
                                            </li>
                                            <Gap WH="w-5"/>
                                            </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer