import React from 'react';

export interface MinaSmileGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSmileGhost(props: MinaSmileGhostProps): React.ReactElement;
export default MinaSmileGhost;
