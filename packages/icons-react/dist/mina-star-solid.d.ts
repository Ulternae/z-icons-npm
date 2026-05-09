import React from 'react';

export interface MinaStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStarSolid: React.FC<MinaStarSolidProps>;
export default MinaStarSolid;
