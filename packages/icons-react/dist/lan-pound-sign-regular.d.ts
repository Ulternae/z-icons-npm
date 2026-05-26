import React from 'react';

export interface LanPoundSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoundSignRegular: React.FC<LanPoundSignRegularProps>;
export default LanPoundSignRegular;
