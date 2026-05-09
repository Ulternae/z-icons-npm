import React from 'react';

export interface MinaMoonStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoonStarSolid: React.FC<MinaMoonStarSolidProps>;
export default MinaMoonStarSolid;
