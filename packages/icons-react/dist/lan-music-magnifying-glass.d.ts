import React from 'react';

export interface LanMusicMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMusicMagnifyingGlass: React.FC<LanMusicMagnifyingGlassProps>;
export default LanMusicMagnifyingGlass;
