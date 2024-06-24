import React from 'react';
import Main from '../components/section/Main';

const Home = () => {
    const navigateToSearch = (query) => {
        window.location.href = `/search/${query}`;
    };

    return (
        <Main title='홈 페이지' description='홈 페이지'>
            <section id='home' className='home-section'>
                <div className='content'>
                    <div className='homeMovie'>
                        <h1>Movie review youtube</h1>
                    </div>
                    <div className='features'>
                        <div className='feature'>
                            <img src="" alt="" />
                            <h2>최신 영화 예고편</h2>
                            <button onClick={() => navigateToSearch('최신 영화 예고편')}>최신 영화 예고편</button>
                        </div>
                        <div className='feature'>
                                 <img src="" alt="" />
                            <h2>최신 영화 리뷰</h2>
                            <p>최신 영화 리뷰를 찾아보세요.</p>
                            <button onClick={() => navigateToSearch('최신영화 리뷰')}>최신 영화 리뷰</button>
                        </div>
                        <div className='feature'>
                            <img src="" alt="" />
                            <h2>인기 영화</h2>
                            <p>평점 높은 영화 리뷰</p>
                            <button onClick={() => navigateToSearch('인기 영화')}>인기 영화 리뷰</button>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default Home;