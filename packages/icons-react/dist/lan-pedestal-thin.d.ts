import React from 'react';

export interface LanPedestalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPedestalThin: React.FC<LanPedestalThinProps>;
export default LanPedestalThin;
