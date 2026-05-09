import React from 'react';

export interface MinaEuroCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroCircleSolid: React.FC<MinaEuroCircleSolidProps>;
export default MinaEuroCircleSolid;
