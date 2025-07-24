import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  Person as PersonIcon,
  Description as DocumentIcon,
  EventAvailable as LeaveIcon,
  School as ResultsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Tab routes configuration
  const tabs = [
    { label: 'Student Profiles', path: '/students', icon: <PersonIcon /> },
    { label: 'Documents', path: '/documents', icon: <DocumentIcon /> },
    { label: 'Leave Approvals', path: '/leave', icon: <LeaveIcon /> },
    { label: 'Semester Results', path: '/semester-results', icon: <ResultsIcon /> },
  ];

  const tabIndex = tabs.findIndex(tab => tab.path === location.pathname);

  const handleTabChange = (event, newValue) => {
    navigate(tabs[newValue].path);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path) => {
    setAnchorEl(null);
    if (path) {
      navigate(path);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{ backgroundColor: 'background.paper' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              sx={{
                width: 48,
                height: 48,
                mr: 2,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
              }}
            >
              K
            </Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Mr. Krishnan (Faculty)
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Section: IT-A | Department: Information Technology
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'block' },
                color: 'primary.main',
              }}
            >
              ABC Engineering College
            </Typography>
            <IconButton color="primary">
              <DashboardIcon />
            </IconButton>

            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleMenuClose()}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {tabs.map((tab, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMenuClose(tab.path)}
              selected={tab.path === location.pathname}
            >
              <ListItemIcon>{tab.icon}</ListItemIcon>
              {tab.label}
            </MenuItem>
          ))}
        </Menu>
      </AppBar>

      {!isMobile && (
        <Tabs
          value={tabIndex >= 0 ? tabIndex : false}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          sx={{
            backgroundColor: 'background.paper',
            borderBottom: 1,
            borderColor: 'divider',
            '& .MuiTab-root': {
              py: 2,
              minHeight: 64,
              fontSize: '0.875rem',
              textTransform: 'none',
              '&.Mui-selected': {
                fontWeight: 'bold',
              },
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              icon={tab.icon}
              iconPosition="start"
            />
          ))}
        </Tabs>
      )}
    </Box>
  );
};

export default Header;
