import React from 'react';

export interface LanUserMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMusic(props: LanUserMusicProps): React.ReactElement;
export default LanUserMusic;
