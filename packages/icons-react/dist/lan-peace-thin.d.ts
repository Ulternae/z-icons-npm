import React from 'react';

export interface LanPeaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeaceThin: React.FC<LanPeaceThinProps>;
export default LanPeaceThin;
