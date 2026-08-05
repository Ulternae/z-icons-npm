import React from 'react';

export interface LanImageMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageMusic(props: LanImageMusicProps): React.ReactElement;
export default LanImageMusic;
