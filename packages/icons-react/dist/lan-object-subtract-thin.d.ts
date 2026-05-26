import React from 'react';

export interface LanObjectSubtractThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectSubtractThin: React.FC<LanObjectSubtractThinProps>;
export default LanObjectSubtractThin;
