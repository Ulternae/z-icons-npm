import React from 'react';

export interface LanSlidersSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersSimpleThin: React.FC<LanSlidersSimpleThinProps>;
export default LanSlidersSimpleThin;
