import React from 'react';

export interface LanSlidersHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersHThin: React.FC<LanSlidersHThinProps>;
export default LanSlidersHThin;
