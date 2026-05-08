import React from 'react';

export interface MinaPlanetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlanet: React.FC<MinaPlanetProps>;
export default MinaPlanet;
