import React from 'react';

export interface LanBandAidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBandAidThin: React.FC<LanBandAidThinProps>;
export default LanBandAidThin;
