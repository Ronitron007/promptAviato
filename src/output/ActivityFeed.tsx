import React from 'react';
import styled from 'styled-components';
import { Button } from 'aviato-ui';
import { DocumentIcon, CrossIcon } from 'aviato-ui';
import { ActivityItem } from './types';


interface ActivityListProps {
  activities: ActivityItem[];
}

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #dfe1e6;
  padding: 1rem;
`;

const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
`;

const ContentContainer = styled.div``;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserName = styled.span`
  font-weight: 500;
`;

const Content = styled.span`
  color: #696f8c;
`;

const Time = styled.span`
  color: #8f95b2;
`;

const MessageText = styled.p`
  margin-top: 0.5rem;
  color: #666d80;
`;

const AttachmentsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <Container>
      <Title>Today</Title>

      <ActivityContainer>
        {activities.map((activity) => (
          <ActivityCard key={activity.id}>
            <ActivityHeader>
              <Avatar src={activity.user.avatar} alt={activity.user.name} />
              <ContentContainer>
                <HeaderInfo>
                  <UserName>{activity.user.name}</UserName>
                  <Content>{activity.content}</Content>
                  <Time>{activity.time}</Time>
                </HeaderInfo>

                {activity.type === 'message' && (
                  <MessageText>
                    Eleifend neque dis volutpat in tellus. Pellentesque fusce et tortor id morbi velit. Dignissim ut
                    pretium scelerisque libero elementum pulvinar aliquet eu. Enim pretium facilisis diam adipiscing
                    adipiscing lectus sodales. At rutrum quis laoreet tellus.
                  </MessageText>
                )}

                {activity.attachments && (
                  <AttachmentsContainer>
                    {activity.attachments.map((attachment) => (
                      <Button key={attachment.id} appearance="minimal" iconBefore={DocumentIcon} iconAfter={CrossIcon}>
                        {attachment.name}
                      </Button>
                    ))}
                  </AttachmentsContainer>
                )}
              </ContentContainer>
            </ActivityHeader>
          </ActivityCard>
        ))}
      </ActivityContainer>
    </Container>
  );
};

export default ActivityList;
