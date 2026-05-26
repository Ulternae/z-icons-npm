import React from 'react';

export interface LanBookArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookArrowRight: React.FC<LanBookArrowRightProps>;
export default LanBookArrowRight;
