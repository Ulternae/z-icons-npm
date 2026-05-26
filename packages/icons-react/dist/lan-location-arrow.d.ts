import React from 'react';

export interface LanLocationArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationArrow: React.FC<LanLocationArrowProps>;
export default LanLocationArrow;
