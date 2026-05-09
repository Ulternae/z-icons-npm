import React from 'react';

export interface MinaPauseSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseSquareSolid: React.FC<MinaPauseSquareSolidProps>;
export default MinaPauseSquareSolid;
