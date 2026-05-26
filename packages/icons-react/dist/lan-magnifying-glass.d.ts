import React from 'react';

export interface LanMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnifyingGlass: React.FC<LanMagnifyingGlassProps>;
export default LanMagnifyingGlass;
