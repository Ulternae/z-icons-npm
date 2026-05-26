import React from 'react';

export interface LanDollarSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollarSignThin: React.FC<LanDollarSignThinProps>;
export default LanDollarSignThin;
