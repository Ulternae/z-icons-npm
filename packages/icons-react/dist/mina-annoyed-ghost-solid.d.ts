import React from 'react';

export interface MinaAnnoyedGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAnnoyedGhostSolid: React.FC<MinaAnnoyedGhostSolidProps>;
export default MinaAnnoyedGhostSolid;
