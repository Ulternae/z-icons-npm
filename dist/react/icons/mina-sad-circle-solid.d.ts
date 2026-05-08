import React from 'react';

export interface MinaSadCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSadCircleSolid: React.FC<MinaSadCircleSolidProps>;
export default MinaSadCircleSolid;
