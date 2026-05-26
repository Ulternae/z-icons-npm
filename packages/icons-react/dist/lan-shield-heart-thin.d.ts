import React from 'react';

export interface LanShieldHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldHeartThin: React.FC<LanShieldHeartThinProps>;
export default LanShieldHeartThin;
