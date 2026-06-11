import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import detailImage from '../../assets/detail.jpg';
import mapImage from '../../assets/map.jpg';
import parse from "html-react-parser";

const LocationSection = ({ locationData, loading }) => {
    console.log(locationData);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}><CircularProgress /></Box>
        );
    }
    if (!locationData) return null;

    return (
        <Box>
            <Box className="mb-4">
                {parse(locationData.content)}
            </Box>

            {locationData.embedLocation && (
                <Box
                    sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        height: { xs: 320, md: 820 },
                    }}
                >
                    {parse(locationData.embedLocation)}
                </Box>
            )}
        </Box>
    );
};

export default LocationSection;