import React from 'react';

export interface LanBaconThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaconThin: React.FC<LanBaconThinProps>;
export default LanBaconThin;
