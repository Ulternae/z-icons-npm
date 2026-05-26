import React from 'react';

export interface LanTrowelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrowelThin: React.FC<LanTrowelThinProps>;
export default LanTrowelThin;
