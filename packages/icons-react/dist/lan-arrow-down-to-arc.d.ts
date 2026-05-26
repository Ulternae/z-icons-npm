import React from 'react';

export interface LanArrowDownToArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDownToArc: React.FC<LanArrowDownToArcProps>;
export default LanArrowDownToArc;
