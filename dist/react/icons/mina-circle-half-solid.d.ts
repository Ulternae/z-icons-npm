import React from 'react';

export interface MinaCircleHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCircleHalfSolid: React.FC<MinaCircleHalfSolidProps>;
export default MinaCircleHalfSolid;
