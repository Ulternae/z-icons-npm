import React from 'react';

export interface MinaHashCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashCircleSolid: React.FC<MinaHashCircleSolidProps>;
export default MinaHashCircleSolid;
