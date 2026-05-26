import React from 'react';

export interface LanCodeSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeSimpleRegular: React.FC<LanCodeSimpleRegularProps>;
export default LanCodeSimpleRegular;
