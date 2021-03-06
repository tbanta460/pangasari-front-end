import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux'; 

// Image


// Components
import { Image, Gap, Nilai } from '..';

const ListTeman = ({mobileStyle, listFriends, Stylee, isStyle, data, checkMobile,nilaiQuizz}) => {
    const { getMyUser } = useSelector(state => state.GetUserById);
    const name = listFriends.firstName+ " " + listFriends.lastName
    return (
        <>
            <div className={checkMobile.length === 0 ? Stylee : mobileStyle}>
                <div className={`flex sm:flex-row flex-col border-b-2 p-3 sm:items-start items-center ${listFriends._id === data._id ? "hidden" :"block"}`}>
                    <Image src={`https://pangasari.herokuapp.com/${listFriends.image}`} alt="Gambar List Teman" Stylee="mx-10 self-center w-32 h-32 rounded-full mb-5"/>
                    <div className="flex flex-col text-center sm:text-left">
                        <div>
                            <span className="block text-xl font-bold">Name: {name}</span>
                            <Gap WH="h-5" />
                            <span className="block font-medium">Kelas: {listFriends.kelas} </span>
                        </div>
                        <Gap WH="h-5" />
                        <div className="flex flex-row sm:justify-start justify-center">
                            <Nilai nilai={listFriends.point === undefined ? "0" : listFriends.point} ulangan={nilaiQuizz[1]}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListTeman