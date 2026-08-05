import React from 'react';

export interface MinaSearchCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchCheckSolid(props: MinaSearchCheckSolidProps): React.ReactElement;
export default MinaSearchCheckSolid;
