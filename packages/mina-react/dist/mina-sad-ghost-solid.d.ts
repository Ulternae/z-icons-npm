import React from 'react';

export interface MinaSadGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSadGhostSolid(props: MinaSadGhostSolidProps): React.ReactElement;
export default MinaSadGhostSolid;
