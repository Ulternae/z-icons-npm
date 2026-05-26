import React from 'react';

export interface LanPinataThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPinataThin: React.FC<LanPinataThinProps>;
export default LanPinataThin;
