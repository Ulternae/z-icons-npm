import React from 'react';

export interface MinaMaximizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMaximizeSolid: React.FC<MinaMaximizeSolidProps>;
export default MinaMaximizeSolid;
