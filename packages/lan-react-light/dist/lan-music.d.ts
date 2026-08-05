import React from 'react';

export interface LanMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMusic(props: LanMusicProps): React.ReactElement;
export default LanMusic;
