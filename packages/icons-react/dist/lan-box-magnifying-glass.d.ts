import React from 'react';

export interface LanBoxMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxMagnifyingGlass: React.FC<LanBoxMagnifyingGlassProps>;
export default LanBoxMagnifyingGlass;
