import React from 'react';

export interface LanListMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListMusic(props: LanListMusicProps): React.ReactElement;
export default LanListMusic;
