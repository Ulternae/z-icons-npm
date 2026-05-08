import React from 'react';

export interface MinaMathSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMathSquareSolid: React.FC<MinaMathSquareSolidProps>;
export default MinaMathSquareSolid;
