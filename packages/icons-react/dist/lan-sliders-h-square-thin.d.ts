import React from 'react';

export interface LanSlidersHSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersHSquareThin: React.FC<LanSlidersHSquareThinProps>;
export default LanSlidersHSquareThin;
