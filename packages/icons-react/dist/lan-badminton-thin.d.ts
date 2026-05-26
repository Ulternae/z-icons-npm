import React from 'react';

export interface LanBadmintonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadmintonThin: React.FC<LanBadmintonThinProps>;
export default LanBadmintonThin;
