import React from 'react';

export interface LanCabThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabThin: React.FC<LanCabThinProps>;
export default LanCabThin;
