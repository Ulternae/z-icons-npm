import React from 'react';

export interface MinaPlanetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlanet(props: MinaPlanetProps): React.ReactElement;
export default MinaPlanet;
