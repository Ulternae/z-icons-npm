import React from 'react';

export interface LanOvenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOvenRegular: React.FC<LanOvenRegularProps>;
export default LanOvenRegular;
