import React from 'react';

export interface MinaFunnyGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFunnyGhost: React.FC<MinaFunnyGhostProps>;
export default MinaFunnyGhost;
