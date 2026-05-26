import React from 'react';

export interface LanMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusRegular: React.FC<LanMinusRegularProps>;
export default LanMinusRegular;
