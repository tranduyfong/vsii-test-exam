import React, { useState, useEffect } from 'react';
import { Box, Container, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';

import HeroBanner from '../components/project/HeroBanner';
import LocationSection from '../components/project/LocationSection';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import LayersIcon from '@mui/icons-material/Layers';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ArticleIcon from '@mui/icons-material/Article';

import { getContent } from "../services/api";

const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.75)',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '15px',
  flex: 1,
  minWidth: 'auto',
  minHeight: '80px',
  '&.Mui-selected': {
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '30px',
    margin: '10px',
    minHeight: '40px',
  },
}));

const mobileTabSx = {
  flex: '0 0 auto',
  minWidth: 140,
};

const CONTENT_TYPES = ["OVERVIEW", "LOCATION", "POLICY",];
const TAB_HASHES = ['#tong-quan', '#vi-tri', '#phan-khu', '#mat-bang-quy-can', '#quy-can', '#chinh-sach-ban-hang', '#tin-tuc'];

const ProjectLocationPage = () => {
  const [tabValue, setTabValue] = useState(() => {
    const currentHash = window.location.hash;
    const initialIndex = TAB_HASHES.indexOf(currentHash);
    return initialIndex !== -1 ? initialIndex : 0;
  });
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Giả sử projectId lấy từ useParams() hoặc props, ở đây ví dụ là 1
  const projectId = 7;

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      const index = TAB_HASHES.indexOf(currentHash);
      if (index !== -1) {
        setTabValue(index);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Gọi API khi tab "Vị trí" (index = 1) được chọn
  useEffect(() => {
    if (tabValue === 1) {
      const fetchLocationData = async () => {
        try {
          setLoading(true);
          const response = await getContent(projectId, 'PROJECT', 'LOCATION');
          setContent(response.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchLocationData();
    }
  }, [tabValue, projectId]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    window.history.pushState(null, '', TAB_HASHES[newValue]);
  };

  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth={false} className="container-fluid" sx={{ mt: 3, px: { xs: 2, md: 4 }, flex: 1 }}>
        <HeroBanner />

        <Box sx={{ borderRadius: 2, mb: 5, background: 'linear-gradient(90deg, #2A52BE 0%, #00B4D8 100%)', overflow: 'hidden' }}>
          <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" scrollButtons="auto" TabIndicatorProps={{ style: { display: 'none' } }} sx={{ display: { xs: 'none', md: 'flex' }, '& .MuiTabs-flexContainer': { width: '100%' } }}>
            <StyledTab icon={<DashboardIcon sx={{ mr: 1 }} />} iconPosition="start" label="Tổng quan" />
            <StyledTab icon={<LocationOnIcon sx={{ mr: 1 }} />} iconPosition="start" label="Vị trí" />
            <StyledTab icon={<MapIcon sx={{ mr: 1 }} />} iconPosition="start" label="Phân khu" />
            <StyledTab icon={<LayersIcon sx={{ mr: 1 }} />} iconPosition="start" label="Mặt bằng quỹ căn" />
            <StyledTab icon={<HomeWorkIcon sx={{ mr: 1 }} />} iconPosition="start" label="Quỹ căn" />
            <StyledTab icon={<ReceiptLongIcon sx={{ mr: 1 }} />} iconPosition="start" label="Chính sách bán hàng" />
            <StyledTab icon={<ArticleIcon sx={{ mr: 1 }} />} iconPosition="start" label="Tin tức" />
          </Tabs>
          <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons={false} TabIndicatorProps={{ style: { display: 'none' } }} sx={{ display: { xs: 'flex', md: 'none' }, '& .MuiTabs-scrollButtons': { display: 'none' } }}>
            <StyledTab sx={mobileTabSx} icon={<DashboardIcon sx={{ mr: 1 }} />} iconPosition="start" label="Tổng quan" />
            <StyledTab sx={mobileTabSx} icon={<LocationOnIcon sx={{ mr: 1 }} />} iconPosition="start" label="Vị trí" />
            <StyledTab sx={mobileTabSx} icon={<MapIcon sx={{ mr: 1 }} />} iconPosition="start" label="Phân khu" />
            <StyledTab sx={mobileTabSx} icon={<LayersIcon sx={{ mr: 1 }} />} iconPosition="start" label="Mặt bằng quỹ căn" />
            <StyledTab sx={mobileTabSx} icon={<HomeWorkIcon sx={{ mr: 1 }} />} iconPosition="start" label="Quỹ căn" />
            <StyledTab sx={mobileTabSx} icon={<ReceiptLongIcon sx={{ mr: 1 }} />} iconPosition="start" label="Chính sách bán hàng" />
            <StyledTab sx={mobileTabSx} icon={<ArticleIcon sx={{ mr: 1 }} />} iconPosition="start" label="Tin tức" />
          </Tabs>
        </Box>

        {tabValue === 1 && (
          <LocationSection locationData={content} loading={loading} />
        )}
      </Container>
    </Box>
  );
};

export default ProjectLocationPage;
