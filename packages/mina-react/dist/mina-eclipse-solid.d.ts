import React from 'react';

export interface MinaEclipseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEclipseSolid(props: MinaEclipseSolidProps): React.ReactElement;
export default MinaEclipseSolid;
