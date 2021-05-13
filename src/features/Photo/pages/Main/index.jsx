import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../../../components/Banner'
import Images from '../../../../constants/images'

const MainPage = () => {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🤳" backgroundUrl={Images.CODING_BG} />
      <div className="container text-center">
        <Link to="/photos/add">Add new photo</Link>
      </div>
    </div>
  )
}

export default MainPage
