import React from 'react';

export interface MinaTallyFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTallyFourSolid: React.FC<MinaTallyFourSolidProps>;
export default MinaTallyFourSolid;
