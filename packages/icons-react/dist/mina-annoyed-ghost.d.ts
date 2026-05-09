import React from 'react';

export interface MinaAnnoyedGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAnnoyedGhost: React.FC<MinaAnnoyedGhostProps>;
export default MinaAnnoyedGhost;
