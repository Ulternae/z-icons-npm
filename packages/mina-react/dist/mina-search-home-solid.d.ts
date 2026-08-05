import React from 'react';

export interface MinaSearchHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchHomeSolid(props: MinaSearchHomeSolidProps): React.ReactElement;
export default MinaSearchHomeSolid;
