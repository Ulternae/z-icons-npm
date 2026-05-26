import React from 'react';

export interface LanPompebledThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPompebledThin: React.FC<LanPompebledThinProps>;
export default LanPompebledThin;
