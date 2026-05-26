import React from 'react';

export interface LanMusicAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMusicAlt: React.FC<LanMusicAltProps>;
export default LanMusicAlt;
