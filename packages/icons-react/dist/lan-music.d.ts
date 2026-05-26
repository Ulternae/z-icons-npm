import React from 'react';

export interface LanMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMusic: React.FC<LanMusicProps>;
export default LanMusic;
