import React from 'react';

export interface LanCarrotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarrotRegular: React.FC<LanCarrotRegularProps>;
export default LanCarrotRegular;
