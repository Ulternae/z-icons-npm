import React from 'react';

export interface LanBanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanRegular: React.FC<LanBanRegularProps>;
export default LanBanRegular;
