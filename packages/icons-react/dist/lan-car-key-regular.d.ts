import React from 'react';

export interface LanCarKeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarKeyRegular: React.FC<LanCarKeyRegularProps>;
export default LanCarKeyRegular;
