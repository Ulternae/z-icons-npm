import React from 'react';

export interface MinaEclipseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEclipseSolid: React.FC<MinaEclipseSolidProps>;
export default MinaEclipseSolid;
