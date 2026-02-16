'use client'

import { useState, useEffect } from 'react'
import { 
  AppBar, Toolbar, Typography, Button, Container, 
  Box, Paper, Grid, Card, CardContent, IconButton,
  Drawer, List, ListItem, ListItemIcon, ListItemText,
  Avatar, Badge, Divider, Alert, Snackbar,
  CircularProgress, ToggleButton, ToggleButtonGroup
} from '@mui/material'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  ShowChart as ChartIcon,
  Analytics as AnalyticsIcon,
  SmartToy as BotIcon,
  People as PeopleIcon,
  Store as StoreIcon,
  EmojiEvents as LeaderboardIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  AccountBalanceWallet as WalletIcon,
  TrendingUp,
  TrendingDown,
  Whatshot,
  AcUnit
} from '@mui/icons-material'

const drawerWidth = 280

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)
  const [balance, setBalance] = useState(10000)
  const [chartLayout, setChartLayout] = useState('1')
  const [selectedMarket, setSelectedMarket] = useState('R_100')

  const menuItems = [
    { id: 0, text: 'Dashboard', icon: <DashboardIcon /> },
    { id: 1, text: 'Trading', icon: <ChartIcon /> },
    { id: 2, text: 'Analytics', icon: <AnalyticsIcon /> },
    { id: 3, text: 'AI Signals', icon: <Whatshot /> },
    { id: 4, text: 'Bot Builder', icon: <BotIcon /> },
    { id: 5, text: 'Copy Trading', icon: <PeopleIcon /> },
    { id: 6, text: 'Marketplace', icon: <StoreIcon /> },
    { id: 7, text: 'Leaderboard', icon: <LeaderboardIcon /> },
  ]

  const drawer = (
    <Box sx={{ bgcolor: '#0a0e27', height: '100%', color: '#fff' }}>
      <Toolbar sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: 2 }}>
        <Typography variant="h5" fontWeight="bold">BERLIN 9.0</Typography>
      </Toolbar>
      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.id}
            selected={selectedTab === item.id}
            onClick={() => setSelectedTab(item.id)}
            sx={{
              '&.Mui-selected': { bgcolor: 'rgba(102, 126, 234, 0.2)', borderLeft: '4px solid #667eea' },
              '&:hover': { bgcolor: 'rgba(102, 126, 234, 0.1)' }
            }}
          >
            <ListItemIcon sx={{ color: '#667eea', minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', bgcolor: '#0a0e27', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, bgcolor: '#1a1f3a' }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}><MenuIcon /></IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>{menuItems[selectedTab].text}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            <WalletIcon sx={{ mr: 1, color: '#00ff88' }} />
            <Typography variant="body1" fontWeight="bold" color="#00ff88">${balance.toFixed(2)}</Typography>
          </Box>
          <IconButton color="inherit"><Badge badgeContent={4} color="error"><NotificationsIcon /></Badge></IconButton>
          <Avatar sx={{ bgcolor: '#667eea', ml: 2 }}>U</Avatar>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer variant="permanent" sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: '#0a0e27' } }} open>{drawer}</Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: '64px' }}>
        {selectedTab === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, bgcolor: '#1a1f3a', borderLeft: '4px solid #00ff88' }}>
                <Typography color="#888">Balance</Typography>
                <Typography variant="h4" color="#fff">${balance.toFixed(2)}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, bgcolor: '#1a1f3a', borderLeft: '4px solid #667eea' }}>
                <Typography color="#888">Today's P/L</Typography>
                <Typography variant="h4" color="#00ff88">+$234.50</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, bgcolor: '#1a1f3a', borderLeft: '4px solid #ffaa00' }}>
                <Typography color="#888">Win Rate</Typography>
                <Typography variant="h4" color="#fff">68.5%</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, bgcolor: '#1a1f3a', borderLeft: '4px solid #ff0055' }}>
                <Typography color="#888">Active Trades</Typography>
                <Typography variant="h4" color="#fff">3</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 2, bgcolor: '#1a1f3a', height: 400 }}>
                <Typography variant="h6" color="#fff" mb={2}>Market Overview</Typography>
                <Box sx={{ bgcolor: '#0a0e27', height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  📊 TradingView Chart Placeholder
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, bgcolor: '#1a1f3a', height: 400, overflow: 'auto' }}>
                <Typography variant="h6" color="#fff" mb={2}>AI Signals</Typography>
                <Box sx={{ p: 2, mb: 1, bgcolor: '#0a0e27', borderRadius: 1, borderLeft: '4px solid #00ff88' }}>
                  <Typography variant="body2" color="#888">R_100 • 5 ticks</Typography>
                  <Typography variant="body1" color="#fff">CALL - 85% confidence</Typography>
                </Box>
                <Box sx={{ p: 2, mb: 1, bgcolor: '#0a0e27', borderRadius: 1, borderLeft: '4px solid #ff0055' }}>
                  <Typography variant="body2" color="#888">R_75 • 5 ticks</Typography>
                  <Typography variant="body1" color="#fff">PUT - 72% confidence</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  )
}
