import React from 'react';

export interface LanFireFlameSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlameSimpleRegular: React.FC<LanFireFlameSimpleRegularProps>;
export default LanFireFlameSimpleRegular;
