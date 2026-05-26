import React from 'react';

export interface LanArrowLeftFromArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowLeftFromArc: React.FC<LanArrowLeftFromArcProps>;
export default LanArrowLeftFromArc;
