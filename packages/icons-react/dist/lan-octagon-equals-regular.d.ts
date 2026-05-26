import React from 'react';

export interface LanOctagonEqualsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonEqualsRegular: React.FC<LanOctagonEqualsRegularProps>;
export default LanOctagonEqualsRegular;
