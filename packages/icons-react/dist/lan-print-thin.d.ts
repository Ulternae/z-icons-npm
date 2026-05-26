import React from 'react';

export interface LanPrintThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrintThin: React.FC<LanPrintThinProps>;
export default LanPrintThin;
