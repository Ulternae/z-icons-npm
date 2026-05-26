import React from 'react';

export interface LanPompebledProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPompebled: React.FC<LanPompebledProps>;
export default LanPompebled;
