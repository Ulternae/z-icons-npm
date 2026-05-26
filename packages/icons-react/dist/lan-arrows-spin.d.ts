import React from 'react';

export interface LanArrowsSpinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsSpin: React.FC<LanArrowsSpinProps>;
export default LanArrowsSpin;
