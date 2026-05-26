import React from 'react';

export interface LanHeadsetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadsetThin: React.FC<LanHeadsetThinProps>;
export default LanHeadsetThin;
