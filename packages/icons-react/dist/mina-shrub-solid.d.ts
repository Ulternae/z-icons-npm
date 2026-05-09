import React from 'react';

export interface MinaShrubSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShrubSolid: React.FC<MinaShrubSolidProps>;
export default MinaShrubSolid;
