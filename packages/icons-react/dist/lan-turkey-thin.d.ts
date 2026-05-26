import React from 'react';

export interface LanTurkeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurkeyThin: React.FC<LanTurkeyThinProps>;
export default LanTurkeyThin;
