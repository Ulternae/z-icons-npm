import React from 'react';

export interface LanPencilLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilLineThin: React.FC<LanPencilLineThinProps>;
export default LanPencilLineThin;
