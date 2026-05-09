import React from 'react';

export interface MinaEarthProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEarth: React.FC<MinaEarthProps>;
export default MinaEarth;
