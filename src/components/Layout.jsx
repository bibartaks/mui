import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material"
import {
  styled,
  Drawer,
  Typography,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material"
import PropTypes from "prop-types"
import { useNavigate, useLocation } from "react-router-dom"
import { format } from "date-fns"

const LayoutWrapper = styled("div")({
  background: "#f9f9f9",
  width: "100%",
  padding: 20,
})

const drawerWidth = 240

const classes = {
  drawer: {
    width: drawerWidth,
    ".MuiDrawer-paper": {
      width: drawerWidth,
    },
  },
  active: {
    background: "#f4f4f4",
  },
  toolbar: {
    paddingTop: 10,
  },
}

const Layout = ({ children }) => {
  const menuItem = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ]
  const history = useNavigate()
  const location = useLocation()

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={0}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
            }}
          >
            Today is the {format(new Date(), "do MMM Y")}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar sx={{ marginLeft: 2 }} />
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" anchor="left" sx={classes.drawer}>
        <div>
          <Typography
            variant="h5"
            sx={{
              marginLeft: 2,
              marginTop: 2,
            }}
          >
            Ninja Notes
          </Typography>
        </div>

        {/* list / links */}
        <List>
          {menuItem.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history(item.path)}
              // className={
              //   location.pathname === item.path ? classes.active : null
              // }
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <LayoutWrapper>
        <Box sx={classes.toolbar}></Box>
        {children}
      </LayoutWrapper>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
