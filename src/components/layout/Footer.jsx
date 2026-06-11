import React from 'react';
import { Box, Container, Typography, Link, IconButton, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box sx={{ background: 'linear-gradient(90deg, #2A52BE 0%, #00B4D8 100%)', color: '#fff', mt: { xs: 4, md: 6 }, pt: { xs: 5, md: 6 }, pb: 4 }}>
            <Container maxWidth="" className="row gx-4 gy-4">
                <Box component="section" className="col-12 col-md-4">
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: '#fff', color: '#2A52BE', display: 'grid', placeItems: 'center', fontWeight: 800 }}>OP</Box>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8, color: '#f4f9ff' }}>
                        Nền tảng công nghệ tiên phong & dẫn đầu lĩnh vực kinh doanh bất động sản tại Việt Nam
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                        <PhoneIcon sx={{ fontSize: 20 }} />
                        <Typography variant="body2">0972 72 9999</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                        <EmailIcon sx={{ fontSize: 20 }} />
                        <Typography variant="body2">Contact@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <LocationOnIcon sx={{ fontSize: 20, mt: 0.2 }} />
                        <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                            SB24-36, Sao Biển 24, KĐT Vinhomes Ocean Park,<br />Xã Gia Lâm, TP Hà Nội, Việt Nam
                        </Typography>
                    </Box>
                </Box>

                <Box component="section" className="col-12 col-md-4">
                    <Typography variant="subtitle1" fontWeight={700} gutterBottom sx={{ mb: 2 }}>Danh mục</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4, pl: 2, ml: 1 }}>
                        <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.95rem', listStyleType: 'disc', display: 'list-item' }}>Giới thiệu</Link>
                        <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.95rem', listStyleType: 'disc', display: 'list-item' }}>Dự án</Link>
                        <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.95rem', listStyleType: 'disc', display: 'list-item' }}>Liên hệ</Link>
                    </Box>

                    <Typography variant="subtitle1" fontWeight={700} gutterBottom sx={{ mb: 2 }}>Kết nối</Typography>
                    <Box className="d-flex gap-2" sx={{ ml: -1 }}>
                        <IconButton color="inherit" sx={{ bgcolor: 'rgba(255,255,255,0.15)' }}><FacebookIcon /></IconButton>
                        <IconButton color="inherit" sx={{ bgcolor: 'rgba(255,255,255,0.15)' }}><YouTubeIcon /></IconButton>
                        <IconButton color="inherit" sx={{ bgcolor: 'rgba(255,255,255,0.15)' }}><InstagramIcon /></IconButton>
                    </Box>
                </Box>

                <Box component="section" className="col-12 col-md-4">
                    <Box sx={{ width: '100%', height: 300, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.08)' }}>
                        <iframe
                            title="Google Map Vinhomes Ocean Park"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.9660325680684!2d105.97823661118181!3d20.953879190264963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a59e19e52163%3A0x805749e82d3269d1!2sVinhomes%20Ocean%20Park%203!5e0!3m2!1svi!2s!4v1779520339630!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Box>
                </Box>
            </Container>

            <Divider style={{ height: 2 }} sx={{ bgcolor: 'white', my: 3, mx: { xs: 3, md: 4 } }} />
            <Box sx={{ px: { xs: 3, md: 4 } }}>
                <Typography style={{ fontWeight: 'bold' }} variant="body2" sx={{ opacity: 0.9, textAlign: { xs: 'center', md: 'left' } }}>
                    © 2026 - Realestate. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
