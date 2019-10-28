import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

const ListElementSingle = (props) => {
    console.log(props)

    const { icon, to, primary } = props

    const [open,setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open);
      };

    return (
        <div>
            <ListItem  button onClick={handleClick} component={ props => <Link to={to} {...props}/>}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={primary}/>
            </ListItem>
        </div>
    )
}

export default ListElementSingle