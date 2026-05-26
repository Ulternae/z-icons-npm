import React from 'react';

export interface LanHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartThin: React.FC<LanHeartThinProps>;
export default LanHeartThin;
