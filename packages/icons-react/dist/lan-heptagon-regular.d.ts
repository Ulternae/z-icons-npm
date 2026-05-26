import React from 'react';

export interface LanHeptagonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeptagonRegular: React.FC<LanHeptagonRegularProps>;
export default LanHeptagonRegular;
