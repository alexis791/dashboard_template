import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

const ListItemLink = (props) => {
    const { icon, to, primary } = props
    return (
        <li>
            <ListItem button component={props => <Link to={to} {...props} />}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    )
}

export default ListItemLink