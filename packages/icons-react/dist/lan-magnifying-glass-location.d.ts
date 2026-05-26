import React from 'react';

export interface LanMagnifyingGlassLocationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnifyingGlassLocation: React.FC<LanMagnifyingGlassLocationProps>;
export default LanMagnifyingGlassLocation;
