import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';



const NavBar = () => {
    return (
        <AppBar position="relative" style={{backgroundColor: "#e6867a"}} >
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "black"}}><Logo>🐼Cotton Candy🍥</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "black"}}><MenuItem>Ramen & Yakisoba</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "black"}}><MenuItem>Jugos & Gaseosas</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "black"}}><MenuItem>Bebidas Alcohólicas</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem style={{textDecoration: "none", color: "black"}}><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;