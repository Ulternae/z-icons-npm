import React from 'react';

export interface LanMagnifyingGlassMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnifyingGlassMusic: React.FC<LanMagnifyingGlassMusicProps>;
export default LanMagnifyingGlassMusic;
