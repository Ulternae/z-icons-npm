import React from 'react';

export interface LanSlidersSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersSimple: React.FC<LanSlidersSimpleProps>;
export default LanSlidersSimple;
