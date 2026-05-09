import React from 'react';

export interface MinaShovelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShovelSolid: React.FC<MinaShovelSolidProps>;
export default MinaShovelSolid;
