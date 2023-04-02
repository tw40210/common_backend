import { AppBar, Button, Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import useStyles from './styles';
import logo from '../../images/logo.png';



const Navbar = () => {
    const classes = useStyles();

    const handleClick = (e) => {
    }
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div>
                <Typography  component={Link} to="/" variant="h2" align="center">TITLE</Typography>
                <img className={classes.image} src={logo} alt="memories" height="70"/>
            </div>
            <Button onClick={handleClick}>Click</Button>
        </AppBar>)
                
}

export default Navbar;
//水 PNG圖片素材由hidungjeruk设计 https://zh.pngtree.com/freepng/cute-little-water-monster-rpg_9039516.html?sol=downref&id=bef