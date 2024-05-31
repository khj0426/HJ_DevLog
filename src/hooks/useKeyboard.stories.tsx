import React, { useRef } from 'react';

import { Meta } from '@storybook/react';

import useKeyboard from '@/hooks/useKeyboard';

const meta: Meta = {
  title: '키보드 이벤트를 편하게 쓰는 useKeyboard훅',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Component = () => {
  const ref = useRef(null);

  useKeyboard({
    keys: {
      Enter: () => alert('Enter key was pressed!'),
      Escape: () => alert('Escape key was pressed!'),
    },
    event: 'keydown',
    ref,
  });

  return (
    <input
      ref={ref}
      tabIndex={0}
      style={{ padding: '20px', border: '1px solid black' }}
    ></input>
  );
};
