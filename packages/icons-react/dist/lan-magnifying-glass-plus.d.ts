import React from 'react';

export interface LanMagnifyingGlassPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnifyingGlassPlus: React.FC<LanMagnifyingGlassPlusProps>;
export default LanMagnifyingGlassPlus;
