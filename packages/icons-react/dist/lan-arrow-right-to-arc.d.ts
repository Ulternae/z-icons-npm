import React from 'react';

export interface LanArrowRightToArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowRightToArc: React.FC<LanArrowRightToArcProps>;
export default LanArrowRightToArc;
