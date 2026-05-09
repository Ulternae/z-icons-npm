import React from 'react';

export interface MinaIntersectSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIntersectSolid: React.FC<MinaIntersectSolidProps>;
export default MinaIntersectSolid;
