import React from 'react';

export interface MinaZeroCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroCircleSolid: React.FC<MinaZeroCircleSolidProps>;
export default MinaZeroCircleSolid;
