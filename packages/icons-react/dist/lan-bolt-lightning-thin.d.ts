import React from 'react';

export interface LanBoltLightningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltLightningThin: React.FC<LanBoltLightningThinProps>;
export default LanBoltLightningThin;
