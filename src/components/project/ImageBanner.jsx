import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import bannerImage from '../../assets/banner.jpg';
import detailImage from '../../assets/detail.jpg';
import mapImage from '../../assets/map.jpg';

const defaultImages = [bannerImage, detailImage, mapImage];

const ImageBanner = ({ images = defaultImages, interval = 4500 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images.length) {
            return undefined;
        }

        const timer = window.setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => {
            window.clearInterval(timer);
        };
    }, [images.length, interval]);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                borderRadius: 4,
                pt: '56.25%',
                minHeight: { xs: 260, sm: 320, md: 380 },
                backgroundColor: 'grey.100',
            }}
        >
            {images.map((src, index) => {
                const isActive = index === currentIndex;

                return (
                    <Box
                        key={`${src}-${index}`}
                        component="img"
                        src={src}
                        alt={`Slide ${index + 1}`}
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 4,
                            transition: 'opacity 0.8s ease, transform 0.8s ease',
                            opacity: isActive ? 1 : 0,
                            transform: `translateX(${isActive ? '0%' : '100%'})`,
                            zIndex: isActive ? 1 : 0,
                        }}
                    />
                );
            })}

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    zIndex: 2,
                }}
            >
                {images.map((_, dotIndex) => (
                    <Box
                        key={`dot-${dotIndex}`}
                        sx={{
                            width: dotIndex === currentIndex ? { xs: 18, sm: 22 } : { xs: 8, sm: 10 },
                            height: { xs: 8, sm: 10 },
                            borderRadius: dotIndex === currentIndex ? 99 : '50%',
                            bgcolor: dotIndex === currentIndex ? '#008CA8' : '#C9CACC',
                            transition: 'all 0.25s ease',
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ImageBanner;
