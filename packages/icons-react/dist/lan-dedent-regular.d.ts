import React from 'react';

export interface LanDedentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDedentRegular: React.FC<LanDedentRegularProps>;
export default LanDedentRegular;
