import React from 'react';
import { Header, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import { ColorSchemeToggle, Logo } from '@components';

import useStyles from './Header.styles';

interface headerDefaultProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

export function HeaderDefault({ opened, setOpened }: headerDefaultProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <MediaQuery largerThan="md" styles={{ display: 'none' }}>
      <Header height={{ base: 65, md: 0 }} p="md" className={classes.HeaderContainer}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          }}
        >
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color={theme.colors.blue[6]}
            mr="xl"
          />
          <Logo brand="Murat Umutlu" />
          <ColorSchemeToggle />
        </div>
      </Header>
    </MediaQuery>
  );
}
