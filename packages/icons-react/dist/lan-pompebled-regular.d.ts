import React from 'react';

export interface LanPompebledRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPompebledRegular: React.FC<LanPompebledRegularProps>;
export default LanPompebledRegular;
