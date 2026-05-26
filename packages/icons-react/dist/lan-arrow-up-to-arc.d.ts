import React from 'react';

export interface LanArrowUpToArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUpToArc: React.FC<LanArrowUpToArcProps>;
export default LanArrowUpToArc;
