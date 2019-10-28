import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const ListElement = (props) => {

    console.log(props)

    const [open,setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open);
      };

    return (
        <div>
            <ListItem  button onClick={handleClick}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                { props.children }
            </Collapse>
        </div>
    )
}

export default ListElement