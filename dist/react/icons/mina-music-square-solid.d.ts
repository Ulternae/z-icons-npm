import React from 'react';

export interface MinaMusicSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicSquareSolid: React.FC<MinaMusicSquareSolidProps>;
export default MinaMusicSquareSolid;
