import React, {useState} from 'react'
import Logo from "../Conf/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
          text: "Home",
        },
        {
          text: "About",
        },
        {
          text: "Testimonials",
        },
        {
          text: "Contact",
        },
        {
          text: "Cart",
        },
      ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">À propos</a>
        <a href="">Entreprises</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
        <button className="primary-button">Se connecter</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
     
    </nav>
  );
};

export default Navbar;


/* <Drawer open={openMenu} onClose={() =>setOpenMenu(false)}
      anchor="right">
        <Box sx={{with: 250}}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        >
            <List>
                {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item.text}></ListItemText>
                        </ListItemButton>
                        </ListItem>
                ))}
            </List>
        </Box>
        </Drawer>  */