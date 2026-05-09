import React from 'react';

export interface MinaDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDivideSolid: React.FC<MinaDivideSolidProps>;
export default MinaDivideSolid;
