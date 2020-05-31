import Container from './Container';
import { h } from 'preact';

export const Spacing = ({
  dir,
  size = 3,
}: {
  dir?: 'x' | 'y';
  size?: number;
}) => {
  const amount = 2 ** size;
  const dimensions = dir
    ? {
        width: dir === 'x' ? amount : undefined,
        height: dir === 'y' ? amount : undefined,
      }
    : {
        width: amount,
        height: amount,
      };
  return <Container {...dimensions} />;
};
