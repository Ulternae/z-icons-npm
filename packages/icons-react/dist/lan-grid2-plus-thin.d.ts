import React from 'react';

export interface LanGrid2PlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2PlusThin: React.FC<LanGrid2PlusThinProps>;
export default LanGrid2PlusThin;
