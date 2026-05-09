import React from 'react';

export interface MinaFunnyGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFunnyGhostSolid: React.FC<MinaFunnyGhostSolidProps>;
export default MinaFunnyGhostSolid;
