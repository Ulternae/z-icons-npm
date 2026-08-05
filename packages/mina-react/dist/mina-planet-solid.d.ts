import React from 'react';

export interface MinaPlanetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlanetSolid(props: MinaPlanetSolidProps): React.ReactElement;
export default MinaPlanetSolid;
