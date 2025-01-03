import React from 'react';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';
import { ContactInfo } from './ContactPanel';
import { ActivityItem } from './types';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: white;
`;

const Reports: React.FC = () => {
  const [activities, setActivities] = React.useState<ActivityItem[]>([
    {
      id: '1',
      type: 'status_change',
      user: {
        name: 'Leslie Alexander',
        initials: 'LA',
        color: 'blue',
      },
      content: 'Changed status in Competitive Targeting',
      time: '2 min ago',
    },
    {
      id: '2',
      type: 'reacquisition',
      user: {
        name: 'Floyd Miles',
        initials: 'FM',
        color: 'green',
      },
      content:
        'Eleifend neque dis volutpat in tellus. Pellentesque fusce et tortor id morbi velit. Dignissim ut pretium scelerisque libero elementum pulvinar aliquet eu.',
      time: '2 min ago',
      attachments: [
        { id: '1', name: 'Report.docx', type: 'doc' },
        { id: '2', name: 'Support.pdf', type: 'pdf' },
        { id: '3', name: 'AnnualCalc.xls', type: 'xls' },
      ],
    },
  ]);

  return (
    <Container>
      <Sidebar />
      <MainContent activities={activities} />
      <ContactInfo />
    </Container>
  );
};

export default Reports;
