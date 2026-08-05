import React from 'react';

export interface MinaAngryGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAngryGhost(props: MinaAngryGhostProps): React.ReactElement;
export default MinaAngryGhost;
