'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import QualityAuditChecklist from '@/app/(DashboardLayout)/components/dashboard/QualityAuditChecklist';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
    <Box mt={2}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} lg={12}>
          <QualityAuditChecklist />
        </Grid>
        
      </Grid>
    </Box>
  </PageContainer>
  )
}

export default Dashboard;
