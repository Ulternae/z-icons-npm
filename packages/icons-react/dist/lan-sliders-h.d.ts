import React from 'react';

export interface LanSlidersHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersH: React.FC<LanSlidersHProps>;
export default LanSlidersH;
