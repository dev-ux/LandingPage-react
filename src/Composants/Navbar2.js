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
    <nav className='menu2'>
      <div className="navbar-links-container2">
        <a href="">Tous les articles</a>
        <a href="">Articles récents</a>
        <a href="">Sport</a>
        <a href="">Nutrition</a>
        <a href="">Santé</a>
        <a href="">Pathologies</a>
        <a href="">Article de plus plus</a>
        
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
   
    </nav>
  );
};

export default Navbar;


/* <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer> */