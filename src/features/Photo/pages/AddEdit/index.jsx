import React from 'react'
import Banner from '../../../../components/Banner'
import PhotoForm from '../../components/PhotoForm'
import './styles.scss'

const AddEditPage = () => {
  return (
    <div>
      <Banner title="Pick your photo 😎😎😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={values => console.log("Form submit:", values)} />
      </div>
    </div>
  )
}

export default AddEditPage
