import React from 'react';

export interface LanPegasusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPegasusThin: React.FC<LanPegasusThinProps>;
export default LanPegasusThin;
