import React from 'react';

export interface LanArrowDownFromArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDownFromArc: React.FC<LanArrowDownFromArcProps>;
export default LanArrowDownFromArc;
