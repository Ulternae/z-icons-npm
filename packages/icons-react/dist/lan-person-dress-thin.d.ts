import React from 'react';

export interface LanPersonDressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDressThin: React.FC<LanPersonDressThinProps>;
export default LanPersonDressThin;
