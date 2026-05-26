import React from 'react';

export interface LanArrowUpFromArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUpFromArc: React.FC<LanArrowUpFromArcProps>;
export default LanArrowUpFromArc;
