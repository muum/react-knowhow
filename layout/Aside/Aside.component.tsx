import React from 'react';
import { Aside, Image, Title } from '@mantine/core';
import { ContactDetails, Summary } from '@components';

import useStyles from './Aside.styles';

export default function CustomAside() {
  const { classes } = useStyles();

  return (
    <Aside
      p="md"
      hiddenBreakpoint="sm"
      width={{ sm: 200, lg: 300 }}
      className={classes.AsideContainer}
    >
      <Title weight={800} mb="md">
        Murat Umutlu
      </Title>
      <Image
        height={160}
        radius="md"
        src="https://pbs.twimg.com/profile_images/1632494834765246471/AJ9tqOgY_400x400.jpg"
        alt="Murat Umutlu"
        caption="Atasehir Golf Club, Istanbul"
      />
      <Summary />
      <ContactDetails />
    </Aside>
  );
}