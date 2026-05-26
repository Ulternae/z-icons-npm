import React from 'react';

export interface LanSlidersSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersSimpleRegular: React.FC<LanSlidersSimpleRegularProps>;
export default LanSlidersSimpleRegular;
