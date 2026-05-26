import React from 'react';

export interface LanLeafHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafHeartThin: React.FC<LanLeafHeartThinProps>;
export default LanLeafHeartThin;
