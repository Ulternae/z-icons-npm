import React from 'react';

export interface LanMinusOctagonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusOctagonRegular: React.FC<LanMinusOctagonRegularProps>;
export default LanMinusOctagonRegular;
