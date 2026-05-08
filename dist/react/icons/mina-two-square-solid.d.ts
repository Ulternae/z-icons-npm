import React from 'react';

export interface MinaTwoSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoSquareSolid: React.FC<MinaTwoSquareSolidProps>;
export default MinaTwoSquareSolid;
