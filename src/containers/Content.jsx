import React from 'react'

const Content = (props) => {
    console.log(props.children)
    return(
        <div className="content">
            {props.children}
        </div>
    )

}

export default Content