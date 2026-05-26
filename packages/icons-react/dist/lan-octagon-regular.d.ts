import React from 'react';

export interface LanOctagonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonRegular: React.FC<LanOctagonRegularProps>;
export default LanOctagonRegular;
