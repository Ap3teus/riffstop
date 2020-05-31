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
  ...props
}: { type: IconType } & React.HTMLProps<HTMLImageElement>) => {
  const Svg = icons[type];
  return <Svg {...props} />;
};
