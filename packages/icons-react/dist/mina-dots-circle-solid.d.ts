import React from 'react';

export interface MinaDotsCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsCircleSolid: React.FC<MinaDotsCircleSolidProps>;
export default MinaDotsCircleSolid;
