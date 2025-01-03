import React from 'react';
import styled from 'styled-components';
import {
  Avatar,
  Button,
  IconButton,
  ShareIcon,
  ChevronDownIcon,
  CalendarIcon,
  RefreshIcon,
  SettingsIcon,
  ImportIcon,
  DocumentIcon,
  CrossIcon,
  MoreIcon,
} from 'aviato-ui';
import { ActivityItem } from '../../types';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  border-bottom: 1px solid #d8dae5;
  padding: 1rem;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  color: #101840;
`;

const AvatarGroup = styled.div`
  display: flex;
  margin-right: -0.5rem;
`;

const AddButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  border: 2px solid #dfe1e6;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  i {
    color: #474d66;
  }
`;

const Divider = styled.div`
  height: 1.5rem;
  width: 1px;
  background-color: #d8dae5;
`;

const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Content = styled.div`
  flex: 1;
  padding: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  color: #101840;
  margin-bottom: 1rem;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #d8dae5;
  padding: 1rem;
`;

const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const UserName = styled.span`
  font-weight: 500;
  color: #101840;
`;

const TimeStamp = styled.span`
  color: #8f95b2;
`;

const ActivityType = styled.h3`
  font-size: 0.75rem;
  font-weight: 500;
  color: #101840;
  margin-bottom: 0.5rem;
`;

const ActivityContent = styled.p`
  color: #666d80;
  margin-bottom: 1rem;
`;

const AttachmentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface MainContentProps {
  activities: ActivityItem[];
}

export const MainContent: React.FC<MainContentProps> = ({ activities }) => {
  return (
    <Container>
      <Header>
        <HeaderTop>
          <Title>Reports</Title>

          <ButtonGroup>
            <AvatarGroup>
              <Avatar name="DS" size={40} color="green" />
              <Avatar name="DS" size={40} color="orange" />
              <Avatar name="DS" size={40} color="purple" />
              <Avatar name="DS" size={40} color="blue" />
              <AddButton>
                <i className="fas fa-plus"></i>
              </AddButton>
            </AvatarGroup>

            <Divider />

            <Button iconBefore={ShareIcon} appearance="minimal">
              Share
            </Button>

            <IconButton icon={MoreIcon} appearance="minimal" />
          </ButtonGroup>
        </HeaderTop>

        <HeaderBottom>
          <ButtonGroup>
            <Button iconAfter={ChevronDownIcon} appearance="minimal">
              Activity
            </Button>

            <Button iconBefore={CalendarIcon} iconAfter={RefreshIcon} appearance="minimal">
              Last updated: Feb 28, 2024
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button iconBefore={SettingsIcon} appearance="minimal">
              View settings
            </Button>

            <Button iconBefore={ImportIcon} iconAfter={ChevronDownIcon} appearance="minimal">
              Import/export
            </Button>
          </ButtonGroup>
        </HeaderBottom>
      </Header>

      <Content>
        <div>
          <SectionTitle>Today</SectionTitle>

          <ActivityList>
            {activities.map((activity) => (
              <ActivityCard key={activity.id}>
                <ActivityHeader>
                  <Avatar name={activity.user.initials} size={32} color={activity.user.color} />
                  <UserName>{activity.user.name}</UserName>
                  <TimeStamp>{activity.time}</TimeStamp>
                </ActivityHeader>

                {activity.type === 'reacquisition' && <ActivityType>Re:acquisition</ActivityType>}

                <ActivityContent>{activity.content}</ActivityContent>

                {activity.attachments && (
                  <AttachmentList>
                    {activity.attachments.map((attachment) => (
                      <Button key={attachment.id} iconBefore={DocumentIcon} iconAfter={CrossIcon} appearance="minimal">
                        {attachment.name}
                      </Button>
                    ))}
                  </AttachmentList>
                )}
              </ActivityCard>
            ))}
          </ActivityList>
        </div>
      </Content>
    </Container>
  );
};
