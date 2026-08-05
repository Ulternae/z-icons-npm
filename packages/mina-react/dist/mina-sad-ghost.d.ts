import React from 'react';

export interface MinaSadGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSadGhost(props: MinaSadGhostProps): React.ReactElement;
export default MinaSadGhost;
