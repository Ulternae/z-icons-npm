import React from 'react';

export interface LanMopedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMopedRegular: React.FC<LanMopedRegularProps>;
export default LanMopedRegular;
