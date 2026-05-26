import React from 'react';

export interface LanRingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingRegular: React.FC<LanRingRegularProps>;
export default LanRingRegular;
