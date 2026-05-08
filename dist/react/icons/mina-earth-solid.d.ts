import React from 'react';

export interface MinaEarthSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEarthSolid: React.FC<MinaEarthSolidProps>;
export default MinaEarthSolid;
