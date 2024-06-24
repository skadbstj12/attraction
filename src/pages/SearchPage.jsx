import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/section/Loading';

const SearchPage = () => {
    const { searchID } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                console.log('API Key:', process.env.REACT_APP_YOUTUBE_API_KEY); // API 키 확인
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${searchID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                const data = await response.json();
                console.log(data); // 데이터 확인

                if (data.items) {
                    setVideos(data.items);
                } else {
                    setVideos([]);
                }

                // 최소 로딩 소스 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000);

            } catch (error) {
                console.log(error);
                setError('비디오를 가져오는 중 오류가 발생했습니다.');
                setLoading(false);
            }
        }
        fetchVideos();
    }, [searchID])

    return (
        <Main
            title={`Search: ${searchID}`}
            decription={`Search: ${searchID}`}
        >
            {loading ? (
                <Loading />
            ) : error ? (
                <p>{error}</p>
            ) : (
                <section id='searchPage' className='fade-in'>
                    <h2><em>{searchID}</em> 를 검색한 결과입니다.</h2>
                    <div className='video__inner'>
                        {Array.isArray(videos) && videos.length > 0 ? (
                            videos.map((video, index) => (
                                <div className='video' key={index}>
                                    <div className="video__thumb play__icon">
                                        <Link to={`/video/${video.id.videoId}`} style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>

                                        </Link>
                                    </div>
                                    <div className="video__info">
                                        <div className='title'>
                                            <Link to={`/video/${video.id.videoId}`}>
                                                {video.snippet.title}
                                            </Link>
                                        </div>
                                        <div className='author'>
                                            <Link to={`/channel/${video.snippet.channelId}`}>
                                                {video.snippet.channelTitle}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>검색 결과가 없습니다.</p>
                        )}
                    </div>
                </section>
            )}
        </Main>
    )
}

export default SearchPage