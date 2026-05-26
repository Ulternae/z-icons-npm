import React from 'react';

export interface LanArrowRightFromArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowRightFromArc: React.FC<LanArrowRightFromArcProps>;
export default LanArrowRightFromArc;
