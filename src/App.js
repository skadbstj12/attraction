import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import ChannelPage from './pages/ChannelPage'
import SearchPage from './pages/SearchPage'
import Home from './pages/Home'
import Header from './components/section/Header'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/channel' element={<ChannelPage />} />
        <Route path='/video' element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
