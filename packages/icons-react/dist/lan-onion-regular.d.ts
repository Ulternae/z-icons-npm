import React from 'react';

export interface LanOnionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOnionRegular: React.FC<LanOnionRegularProps>;
export default LanOnionRegular;
