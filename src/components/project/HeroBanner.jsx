import React, { useState } from 'react';
import { Box, Typography, Button, Breadcrumbs, Link, Snackbar, Alert } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ImageBanner from './ImageBanner';

const HeroBanner = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleShareClick = async () => {
        try {
            const shareUrl = window.location.href;
            await navigator.clipboard.writeText(shareUrl);
            setOpenSnackbar(true);
        } catch (err) {
            console.error('Không thể sao chép liên kết: ', err);
        }
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
    };
    return (
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
            <Box>
                <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    <Link underline="hover" color="inherit" href="/" style={{ color: '#2A52BE' }}>Dự án</Link>
                    <Typography sx={{ fontWeight: 600 }}>Vinhomes Ocean Park 3</Typography>
                </Breadcrumbs>
            </Box>
            <Typography variant="h5" sx={{ mt: 3, fontWeight: 700, color: '#2A52BE' }}>
                VINHOMES OCEAN PARK 3
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'stretch', sm: 'center' },
                    gap: 2,
                    mb: 3
                }}
            >
                <Typography>
                    Theo dõi thông tin chi tiết và bảng giá, mặt bằng, tiến độ và chính sách bán hàng dự án VINHOMES OCEAN PARK 3.
                </Typography>
                <Button
                    onClick={handleShareClick}
                    variant="contained"
                    startIcon={<ShareIcon />}
                    sx={{
                        background: 'linear-gradient(90deg, #2A52BE 0%, #00B4D8 100%)',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 700,
                        px: 3,
                        py: 1.5,
                        width: { xs: '100%', sm: 'auto' },
                        flexShrink: 0,
                        ':hover': { background: 'linear-gradient(90deg, #2A52BE 0%, #00B4D8 100%)' },
                    }}
                >
                    Chia sẻ
                </Button>
            </Box>

            <Box className="mb-4">
                <ImageBanner />
            </Box>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Đã sao chép liên kết dự án!
                </Alert>
            </Snackbar>
        </Box >
    );
};

export default HeroBanner;
