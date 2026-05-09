import React from 'react';

export interface MinaTallyFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTallyFiveSolid: React.FC<MinaTallyFiveSolidProps>;
export default MinaTallyFiveSolid;
