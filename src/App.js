import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import ChannelPage from './pages/ChannelPage'
import SearchPage from './pages/SearchPage'
import Home from './pages/Home'
import Header from './components/section/Header'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:searchID' element={<SearchPage />} />
        <Route path='/channel/:channelID' element={<ChannelPage />} />
        <Route path='/video/:videoID' element={<VideoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
