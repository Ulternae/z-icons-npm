import React from 'react';

export interface MinaSmileGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSmileGhostSolid(props: MinaSmileGhostSolidProps): React.ReactElement;
export default MinaSmileGhostSolid;
