import React from 'react';

export interface LanUserTagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTagRegular: React.FC<LanUserTagRegularProps>;
export default LanUserTagRegular;
