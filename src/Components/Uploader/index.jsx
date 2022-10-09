import React, { useRef } from 'react'
import './style.css'

function Uploader({changeImageState}) {
  let idRef = useRef(0);
  const handleFileInputChange=(e)=>{
    const { files }= e.target

    changeImageState([...files].map((file,index)=>{
      return {
        src:URL.createObjectURL(file),
        selected:false,
        id:++idRef.current,
      }
    }))
    e.target.value = ""
    }

  return (
    <div className='UploadWrapper'>
      <input className='inputPhoto' multiple={true} accept="image/jpeg , image/png" onChange={handleFileInputChange} type="file" />
    </div>
  )
}

export default Uploader