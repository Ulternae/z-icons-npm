import React from 'react';

export interface LanPieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPieThin: React.FC<LanPieThinProps>;
export default LanPieThin;
