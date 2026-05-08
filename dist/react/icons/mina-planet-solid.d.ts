import React from 'react';

export interface MinaPlanetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlanetSolid: React.FC<MinaPlanetSolidProps>;
export default MinaPlanetSolid;
