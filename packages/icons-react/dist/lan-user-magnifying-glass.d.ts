import React from 'react';

export interface LanUserMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMagnifyingGlass: React.FC<LanUserMagnifyingGlassProps>;
export default LanUserMagnifyingGlass;
