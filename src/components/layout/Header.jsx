import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Link, Chip, Container, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navLinks = [
        { label: 'GIỚI THIỆU', href: '#' },
        { label: 'DỰ ÁN', href: '#' },
        { label: 'TIN TỨC', href: '#' },
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: '#fff', color: '#222', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
                <Container maxWidth="2xl" className="d-flex align-items-center justify-content-between">
                    <Toolbar disableGutters className="w-100 px-0" sx={{ justifyContent: 'space-between', minHeight: 72 }}>
                        <Box className="d-flex align-items-center gap-2">
                            <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: '#2A52BE', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700, fontSize: '1rem' }}>
                                OP
                            </Box>
                        </Box>

                        <Box className="d-none d-md-flex align-items-center justify-content-center gap-4" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                            {navLinks.map((link) => (
                                <Link key={link.label} href={link.href} underline="none" color={link.label === 'DỰ ÁN' ? 'text.primary' : 'text.secondary'} sx={{ fontWeight: 550 }}>
                                    {link.label}
                                </Link>
                            ))}
                        </Box>

                        <Box className="d-flex align-items-center gap-2">
                            <Chip
                                icon={<CircleIcon sx={{ fontSize: 8 }} style={{ color: '#00e676' }} />}
                                label="100 người đang Online"
                                variant="outlined"
                                size="small"
                                sx={{ borderRadius: '20px', borderColor: '#e3e8f0', color: '#4a4a4a', fontSize: '0.8rem', px: 1.5 }}
                            />

                            <IconButton sx={{ display: { xs: 'none', md: 'flex' }, color: '#2A52BE' }}>
                                <AccountCircleIcon fontSize="large" />
                            </IconButton>
                            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: '#2A52BE' }} onClick={() => setDrawerOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 260 }} role="presentation">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            Menu
                        </Typography>
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider />
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.label} disablePadding>
                                <ListItemButton component="a" href={link.href} onClick={() => setDrawerOpen(false)}>
                                    <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 550 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
