import React from 'react';

export interface LanArrowLeftToArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowLeftToArc: React.FC<LanArrowLeftToArcProps>;
export default LanArrowLeftToArc;
