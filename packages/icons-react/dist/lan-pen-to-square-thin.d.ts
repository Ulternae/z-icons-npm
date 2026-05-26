import React from 'react';

export interface LanPenToSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenToSquareThin: React.FC<LanPenToSquareThinProps>;
export default LanPenToSquareThin;
