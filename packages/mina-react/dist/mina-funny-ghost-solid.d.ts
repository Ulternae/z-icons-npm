import React from 'react';

export interface MinaFunnyGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFunnyGhostSolid(props: MinaFunnyGhostSolidProps): React.ReactElement;
export default MinaFunnyGhostSolid;
