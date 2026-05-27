import React from 'react';

export interface CoreFlowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFlowerSolid: React.FC<CoreFlowerSolidProps>;
export default CoreFlowerSolid;
