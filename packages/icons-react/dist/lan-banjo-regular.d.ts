import React from 'react';

export interface LanBanjoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanjoRegular: React.FC<LanBanjoRegularProps>;
export default LanBanjoRegular;
