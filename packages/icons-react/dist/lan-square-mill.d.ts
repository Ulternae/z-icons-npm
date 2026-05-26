import React from 'react';

export interface LanSquareMillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMill: React.FC<LanSquareMillProps>;
export default LanSquareMill;
