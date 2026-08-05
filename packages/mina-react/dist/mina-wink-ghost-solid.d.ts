import React from 'react';

export interface MinaWinkGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWinkGhostSolid(props: MinaWinkGhostSolidProps): React.ReactElement;
export default MinaWinkGhostSolid;
