import React from 'react';

export interface LanDittoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDittoThin: React.FC<LanDittoThinProps>;
export default LanDittoThin;
