import React from 'react';

export interface LanSlidersVSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersVSquareThin: React.FC<LanSlidersVSquareThinProps>;
export default LanSlidersVSquareThin;
