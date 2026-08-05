import React from 'react';

export interface MinaAnnoyedGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAnnoyedGhost(props: MinaAnnoyedGhostProps): React.ReactElement;
export default MinaAnnoyedGhost;
