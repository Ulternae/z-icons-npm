import React from 'react';

export interface MinaTallyThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTallyThreeSolid: React.FC<MinaTallyThreeSolidProps>;
export default MinaTallyThreeSolid;
