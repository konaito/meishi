"use client"
import React from "react"
import { SiFacebook, SiInstagram, SiX } from '@icons-pack/react-simple-icons';
import "@/styles/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function mobile() {
    const navigateToUrl = (url: string) => {
        window.location.href = url;
    };
    return (
        <>
            <div className="head relative justify-between flex w-full flex-col" style={{}}>
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
            <div className="py-3 px-6">
                <h1 className="text-2xl h1-noto-sans">内藤剛汰</h1>
                <p className="text-slate-500 mt-1">@konaito</p>
                <p>02 , iwate-u , full stack engineer , <span className="text-blue-500 underline">#nativeApp</span> , <span className="text-blue-500 underline">#Web</span> , <span className="text-blue-500 underline">#Go</span> , <span className="text-blue-500 underline">#C</span></p>
                <p className="text-slate-500 mt-1"><FontAwesomeIcon icon={faLocationDot} size={"1x"} className="me-1"/>42Tokyo</p>
                <p className="text-slate-500 mt-1"><FontAwesomeIcon icon={faLink} size={"1x"} className="me-1"/><span className="underline">Here</span></p>
            </div>
        </>
    )
}