import React from 'react';

export interface MinaIndifferentGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIndifferentGhostSolid: React.FC<MinaIndifferentGhostSolidProps>;
export default MinaIndifferentGhostSolid;
