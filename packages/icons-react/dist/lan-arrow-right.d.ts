import React from 'react';

export interface LanArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowRight: React.FC<LanArrowRightProps>;
export default LanArrowRight;
