import React from 'react';

export interface LanPawThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawThin: React.FC<LanPawThinProps>;
export default LanPawThin;
