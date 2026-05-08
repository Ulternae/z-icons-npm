import React from 'react';

export interface MinaOneCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneCircleSolid: React.FC<MinaOneCircleSolidProps>;
export default MinaOneCircleSolid;
