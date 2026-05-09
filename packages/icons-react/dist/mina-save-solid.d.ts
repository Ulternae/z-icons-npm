import React from 'react';

export interface MinaSaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSaveSolid: React.FC<MinaSaveSolidProps>;
export default MinaSaveSolid;
