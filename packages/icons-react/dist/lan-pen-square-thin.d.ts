import React from 'react';

export interface LanPenSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSquareThin: React.FC<LanPenSquareThinProps>;
export default LanPenSquareThin;
