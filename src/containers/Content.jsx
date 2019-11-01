import React from 'react'
import { CSSTransition } from 'react-transition-group'

const Content = (props) => {
    return(
        <CSSTransition in={props.stateMenu} timeout={2000} classNames="hidden-menu">
            <div className="content">
                {props.children}
            </div>
        </CSSTransition>
    )
}

export default Content