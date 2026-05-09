import React from 'react';

export interface MinaBrandDribbbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandDribbbleSolid: React.FC<MinaBrandDribbbleSolidProps>;
export default MinaBrandDribbbleSolid;
