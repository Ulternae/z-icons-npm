import React from 'react';

export interface LanMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMusicSolid: React.FC<LanMusicSolidProps>;
export default LanMusicSolid;
