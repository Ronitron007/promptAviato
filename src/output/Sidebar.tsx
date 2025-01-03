import React from 'react';
import styled from 'styled-components';
import { IconButton, MoreIcon } from 'aviato-ui';

const Container = styled.div`
  width: 16rem;
  border-right: 1px solid #dfe1e6;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 2rem;
`;

const SearchContainer = styled.div`
  padding: 0.5rem 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d8dae5;
  border-radius: 0.375rem;
`;

const Nav = styled.nav`
  flex: 1;
  padding: 0 1rem;
`;

const Section = styled.div<{ marginBottom?: string }>`
  margin-bottom: ${(props) => props.marginBottom || '0'};
`;

const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #8f95b2;
  margin-bottom: 0.5rem;
`;

const MenuButton = styled.button<{ active?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: ${(props) => (props.active ? '#3366ff' : '#696f8c')};
  background: ${(props) => (props.active ? '#f8f9fb' : 'transparent')};
  border-radius: 0.5rem;

  &:hover {
    background-color: ${(props) => (props.active ? '#f8f9fb' : '#f1f1f1')};
  }

  i {
    margin-right: 0.75rem;
  }
`;

const Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid #d8dae5;
`;

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src="assets/image_15193a4c.png" alt="Logo" />
        <IconButton icon={MoreIcon} appearance="minimal" />
      </Header>

      <SearchContainer>
        <div className="relative">
          <SearchInput type="text" placeholder="Search" />
        </div>
      </SearchContainer>

      <Nav>
        <Section marginBottom="2rem">
          <SectionTitle>Main menu</SectionTitle>
          <div className="space-y-1">
            {[
              { icon: 'house', label: 'Dashboard' },
              { icon: 'bell', label: 'Notifications' },
              { icon: 'list-check', label: 'Tasks' },
              { icon: 'paperclip', label: 'Notes' },
              { icon: 'envelope', label: 'Email' },
              { icon: 'calendar', label: 'Calendar' },
            ].map((item) => (
              <MenuButton key={item.label}>
                <i className={`fas fa-${item.icon}`}></i>
                {item.label}
              </MenuButton>
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle>Record</SectionTitle>
          <div className="space-y-1">
            {[
              { icon: 'chart-bar', label: 'Reports', active: true },
              { icon: 'building', label: 'Companies' },
              { icon: 'address-book', label: 'Contacts' },
            ].map((item) => (
              <MenuButton key={item.label} active={item.active}>
                <i className={`fas fa-${item.icon}`}></i>
                {item.label}
              </MenuButton>
            ))}
          </div>
        </Section>
      </Nav>

      <Footer>
        <MenuButton>
          <i className="fas fa-gear"></i>
          Settings
        </MenuButton>
      </Footer>
    </Container>
  );
};
