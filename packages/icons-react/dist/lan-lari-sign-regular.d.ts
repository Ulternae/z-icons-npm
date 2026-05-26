import React from 'react';

export interface LanLariSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLariSignRegular: React.FC<LanLariSignRegularProps>;
export default LanLariSignRegular;
