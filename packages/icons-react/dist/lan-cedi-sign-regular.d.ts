import React from 'react';

export interface LanCediSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCediSignRegular: React.FC<LanCediSignRegularProps>;
export default LanCediSignRegular;
