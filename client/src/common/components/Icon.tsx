import Account from '../icons/account_circle.svg';
import Add from '../icons/add.svg';
import AudioTrack from '../icons/audiotrack.svg';
import { h } from 'preact';

type IconType = 'account' | 'add' | 'music';

const icons: Record<IconType, any> = {
  account: Account,
  add: Add,
  music: AudioTrack,
};

export const Icon = ({
  type,
  fill,
  size,
  ...props
}: { type: IconType; fill?: string; size?: number } & React.HTMLProps<
  HTMLImageElement
>) => {
  const Svg = icons[type];
  const dimensions = size
    ? {
        width: size,
        height: size,
      }
    : {};
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
