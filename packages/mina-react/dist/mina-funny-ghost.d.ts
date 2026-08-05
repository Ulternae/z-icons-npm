import React from 'react';

export interface MinaFunnyGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFunnyGhost(props: MinaFunnyGhostProps): React.ReactElement;
export default MinaFunnyGhost;
