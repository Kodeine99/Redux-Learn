
import { Formik } from 'formik'
import React from 'react'
import Select from 'react-select'
import {PHOTO_CATEGORY_OPTIONS} from '../../../../constants/global'
import Images from '../../../../constants/images'

const PhotoForm = () => {
  return (
    <Formik>
      {formikProps => {
        // do something here ...
        const [value, errors, touched] = formikProps;
        console.log(value, errors, touched);

        return (
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputTitle"
                className="form-label"
              >
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputTitle"
              />
            </div>
            <div className="mb-3">
            <label htmlFor="categoryId" className="form-label">Category</label>
              <Select
                id="categoryId"
                name="categoryId"
                placeholder="What's photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoryId"></label>
              <div><button type="submit" class="btn btn-outline-primary">Random a photo</button></div>
              <div>
                <img width="200px" src={Images.TRYING_BG} alt="defaultImage" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Add photo</button>
          </form>
        )
      }}
    </Formik>
  )
}

export default PhotoForm
