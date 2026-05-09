import React from 'react';

export interface MinaUserSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserSquareSolid: React.FC<MinaUserSquareSolidProps>;
export default MinaUserSquareSolid;
