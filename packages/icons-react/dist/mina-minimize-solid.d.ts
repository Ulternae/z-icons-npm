import React from 'react';

export interface MinaMinimizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinimizeSolid: React.FC<MinaMinimizeSolidProps>;
export default MinaMinimizeSolid;
