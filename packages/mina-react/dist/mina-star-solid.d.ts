import React from 'react';

export interface MinaStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStarSolid(props: MinaStarSolidProps): React.ReactElement;
export default MinaStarSolid;
