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
        title: "최신 영화",
        icon: <MdMovieEdit />,
        src: "/search/최신 영화"
    }, {
        title: "추천 영화",
        icon: <AiOutlineLike />,
        src: "/search/추천 영화"
    },
    {
        title: "인기 영화",
        icon: <FcLike />,
        src: "/search/인기 영화"
    },
    {
        title: "느와르",
        icon: <PiDetective />,
        src: "/search/느와르 영화"
    },
    {
        title: "액션",
        icon: <FaExplosion />,
        src: "/search/액션 영화"
    },
    {
        title: "멜로",
        icon: <LuClover />,
        src: "/search/멜로 영화"
    },

    {
        title: "코미디",
        icon: <FaRegFaceGrinTears />,
        src: "/search/코미디 영화"
    },
]

export const searchKeyword = [
    {
        title: "action",
        src: "/search/action movie"
    },
    {
        title: "crime",
        src: "/search/crime movie"
    },
    {
        title: "science fiction",
        src: "/search/SF movie"
    },
    {
        title: "comedy",
        src: "/search/comedy movie"
    },
    {
        title: "romantic",
        src: "/search/romantic movie"
    },
    {
        title: "thriller",
        src: "/search/thriller movie"
    },
    {
        title: "Horror",
        src: "/search/Horror movie"
    },
    {
        title: "fantasy",
        src: "/search/fantasy movie"
    },
    {
        title: "whodunit",
        src: "/search/whodunit movie"
    },

]