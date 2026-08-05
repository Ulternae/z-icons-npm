import React from 'react';

export interface MinaEarthSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEarthSolid(props: MinaEarthSolidProps): React.ReactElement;
export default MinaEarthSolid;
