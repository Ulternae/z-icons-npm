import React from 'react';

export interface LanArrowsToCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToCircle: React.FC<LanArrowsToCircleProps>;
export default LanArrowsToCircle;
