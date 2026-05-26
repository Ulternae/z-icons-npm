import React from 'react';

export interface LanBanjoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanjoThin: React.FC<LanBanjoThinProps>;
export default LanBanjoThin;
