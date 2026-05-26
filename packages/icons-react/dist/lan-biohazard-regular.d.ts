import React from 'react';

export interface LanBiohazardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBiohazardRegular: React.FC<LanBiohazardRegularProps>;
export default LanBiohazardRegular;
