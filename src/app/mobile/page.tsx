"use client"
import React from "react"
import { SiFacebook,SiInstagram,SiX } from '@icons-pack/react-simple-icons';
import "@/styles/styles.css"

export default function mobile() {
    const navigateToUrl = (url:string) => {
        window.location.href = url;
    };
    return (
        <>
            <div className="head relative justify-between flex w-full flex-col" style={{  }}>
                <img src={"/iwate-u.jpeg"} style={{ width: "100vw", height: "50vw", objectFit: "cover" }} />
                <div className="icons flex justify-end p-2 pb-0">
                    <button className="border rounded-full p-2 mx-1"
                    onClick={() => navigateToUrl('https://www.facebook.com/profile.php?id=100078669887929')}>
                        <SiFacebook color='#0866FF' size={24} />
                    </button>
                    <button className="border rounded-full p-2 mx-1"
                    onClick={() => navigateToUrl('https://www.instagram.com/kota_fyb/')}>
                        <SiInstagram color='#E4405F' size={24} />
                    </button>
                    <button className="border rounded-full p-2 mx-1"
                    onClick={() => navigateToUrl('https://twitter.com/konaito0219')}>
                        <SiX color='#000000' size={24} />
                    </button>
                </div>
                <img className="absolute bottom-0 left-5 rounded-full border border-white border-4" src={"/me.png"} style={{ width: "35vw", height: "35vw", objectFit: "cover" }} />
            </div>
            <div className="p-3">
                <h1 className="text-2xl px-3 h1-noto-sans">内藤剛汰</h1>
            </div>
        </>
    )
}