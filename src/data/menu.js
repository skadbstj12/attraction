import React from 'react'
import { MdMovieEdit } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { PiDetective } from "react-icons/pi";
import { FaExplosion } from "react-icons/fa6";
import { LuClover } from "react-icons/lu";
import { FaRegFaceGrinTears } from "react-icons/fa6";

export const headerMenus = [
    {
        title: "윤서",
        icon: <MdMovieEdit />,
        src: "/search/yoonseo"
    }, {
        title: "추천영상",
        icon: <AiOutlineLike />,
        src: "/search/추천 영상"
    },
    {
        title: "추천영화",
        icon: <FcLike />,
        src: "/search/추천 영화"
    },
    {
        title: "느와르",
        icon: <PiDetective />,
        src: "/search/느와르"
    },
    {
        title: "액션",
        icon: <FaExplosion />,
        src: "/search/액션"
    },
    {
        title: "멜로",
        icon: <LuClover />,
        src: "/search/멜로"
    },

    {
        title: "코미디",
        icon: <FaRegFaceGrinTears />,
        src: "/search/코미디"
    },
]

export const searchKeyword = [
    {
        title: "action",
        src: "/search/action"
    },
    {
        title: "crime",
        src: "/search/crime"
    },
    {
        title: "science fiction",
        src: "/search/SF"
    },
    {
        title: "comedy",
        src: "/search/comedy"
    },
    {
        title: "romantic",
        src: "/search/romantic"
    },
    {
        title: "thriller",
        src: "/search/thriller"
    },
    {
        title: "Horror",
        src: "/search/Horror"
    },
    {
        title: "fantasy",
        src: "/search/fantasy"
    },
    {
        title: "whodunit",
        src: "/search/whodunit"
    },

]