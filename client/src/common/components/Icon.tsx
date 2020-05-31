import Account from '../icons/account_circle.svg';
import Add from '../icons/add.svg';
import AudioTrack from '../icons/audiotrack.svg';
import { h } from 'preact';
import { DefaultTheme } from 'styled-components';
import { theme } from '../theme';

export type IconType = 'account' | 'add' | 'music';

const icons: Record<IconType, any> = {
  account: Account,
  add: Add,
  music: AudioTrack,
};

const Icon = ({
  type,
  fill,
  size,
  ...props
}: {
  type: IconType;
  fill?: string;
  size?: number | keyof DefaultTheme['iconSizes'];
}) => {
  const Svg = icons[type];
  const actualSize =
    size && (typeof size === 'string' ? theme.iconSizes[size] : size);
  const dimensions = {
    width: actualSize,
    height: actualSize,
  };
  return (
    <Svg
      preserveAspectRatio="xMinYMin meet"
      viewBox={'0 0 24 24'}
      {...dimensions}
      fill={fill}
      {...props}
    />
  );
};

export default Icon;
