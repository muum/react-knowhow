import React from 'react';
import { Text } from '@mantine/core';

import { Paragraph } from '@components';

interface listItemProps {
  itemLabel?: string;
  itemDescription: React.ReactNode;
}

export default function ListItem({ itemLabel = '', itemDescription }: listItemProps) {
  return (
    <Paragraph>
      <Text fw={700} span>
        {itemLabel}
      </Text>
      {itemDescription}
    </Paragraph>
  );
}
