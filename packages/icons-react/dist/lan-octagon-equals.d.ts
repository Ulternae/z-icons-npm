import React from 'react';

export interface LanOctagonEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonEquals: React.FC<LanOctagonEqualsProps>;
export default LanOctagonEquals;
