import React from 'react';

export interface LanDollarSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollarSign: React.FC<LanDollarSignProps>;
export default LanDollarSign;
