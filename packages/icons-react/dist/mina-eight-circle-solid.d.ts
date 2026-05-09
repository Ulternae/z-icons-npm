import React from 'react';

export interface MinaEightCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightCircleSolid: React.FC<MinaEightCircleSolidProps>;
export default MinaEightCircleSolid;
