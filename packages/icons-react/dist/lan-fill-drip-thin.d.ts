import React from 'react';

export interface LanFillDripThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFillDripThin: React.FC<LanFillDripThinProps>;
export default LanFillDripThin;
