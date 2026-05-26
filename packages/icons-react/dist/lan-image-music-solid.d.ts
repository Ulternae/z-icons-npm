import React from 'react';

export interface LanImageMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageMusicSolid: React.FC<LanImageMusicSolidProps>;
export default LanImageMusicSolid;
