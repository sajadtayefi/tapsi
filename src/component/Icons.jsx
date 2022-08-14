import React from 'react'

export default function Icons(props) {

  return (
    <div>
        <h2>
            {props.title}
        </h2>
        <button className={props.class} onClick={props.click}>
            {props.logo}
        </button>
    </div>
  )
}
