import React from 'react';

export interface LanKerningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKerningRegular: React.FC<LanKerningRegularProps>;
export default LanKerningRegular;
