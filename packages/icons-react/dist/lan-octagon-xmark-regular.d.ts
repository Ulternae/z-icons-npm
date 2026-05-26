import React from 'react';

export interface LanOctagonXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonXmarkRegular: React.FC<LanOctagonXmarkRegularProps>;
export default LanOctagonXmarkRegular;
