import React from 'react';

export interface LanNfcMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcMagnifyingGlass: React.FC<LanNfcMagnifyingGlassProps>;
export default LanNfcMagnifyingGlass;
