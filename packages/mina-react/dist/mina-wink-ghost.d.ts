import React from 'react';

export interface MinaWinkGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWinkGhost(props: MinaWinkGhostProps): React.ReactElement;
export default MinaWinkGhost;
