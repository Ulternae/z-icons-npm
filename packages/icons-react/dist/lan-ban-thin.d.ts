import React from 'react';

export interface LanBanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanThin: React.FC<LanBanThinProps>;
export default LanBanThin;
