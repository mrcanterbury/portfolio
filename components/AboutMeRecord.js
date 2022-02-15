import React from 'react'

export default function AboutMeRecord({details}) {
  return (
    <div>
        <h1>{details.title}</h1>
        <p>
          {details.content}
        </p>
    </div>
  )
}
