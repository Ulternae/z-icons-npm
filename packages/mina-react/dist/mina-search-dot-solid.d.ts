import React from 'react';

export interface MinaSearchDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchDotSolid(props: MinaSearchDotSolidProps): React.ReactElement;
export default MinaSearchDotSolid;
