import React from 'react';

export interface MinaNineCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineCircleSolid: React.FC<MinaNineCircleSolidProps>;
export default MinaNineCircleSolid;
