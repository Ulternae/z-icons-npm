import React from 'react';

export interface LanStarHalfAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarHalfAlt: React.FC<LanStarHalfAltProps>;
export default LanStarHalfAlt;
