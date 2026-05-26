import React from 'react';

export interface LanFanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFanThin: React.FC<LanFanThinProps>;
export default LanFanThin;
