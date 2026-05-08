import React from 'react';

export interface MinaIndifferentGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIndifferentGhost: React.FC<MinaIndifferentGhostProps>;
export default MinaIndifferentGhost;
