import React from 'react';

export interface LanSlidersVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersV: React.FC<LanSlidersVProps>;
export default LanSlidersV;
