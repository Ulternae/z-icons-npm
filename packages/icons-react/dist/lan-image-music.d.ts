import React from 'react';

export interface LanImageMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageMusic: React.FC<LanImageMusicProps>;
export default LanImageMusic;
