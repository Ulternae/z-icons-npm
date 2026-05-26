import React from 'react';

export interface LanChevronCircleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronCircleRight: React.FC<LanChevronCircleRightProps>;
export default LanChevronCircleRight;
