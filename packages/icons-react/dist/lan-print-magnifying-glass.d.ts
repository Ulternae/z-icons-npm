import React from 'react';

export interface LanPrintMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrintMagnifyingGlass: React.FC<LanPrintMagnifyingGlassProps>;
export default LanPrintMagnifyingGlass;
