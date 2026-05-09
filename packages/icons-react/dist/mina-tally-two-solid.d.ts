import React from 'react';

export interface MinaTallyTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTallyTwoSolid: React.FC<MinaTallyTwoSolidProps>;
export default MinaTallyTwoSolid;
