import React from 'react';

export interface MinaRewindSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindSquareSolid: React.FC<MinaRewindSquareSolidProps>;
export default MinaRewindSquareSolid;
