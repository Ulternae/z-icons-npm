import React from 'react';

export interface MinaAnnoyedGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAnnoyedGhostSolid(props: MinaAnnoyedGhostSolidProps): React.ReactElement;
export default MinaAnnoyedGhostSolid;
