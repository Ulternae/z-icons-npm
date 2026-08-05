import React from 'react';

export interface MinaSearchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchSolid(props: MinaSearchSolidProps): React.ReactElement;
export default MinaSearchSolid;
