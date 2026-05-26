import React from 'react';

export interface LanFileShieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileShieldThin: React.FC<LanFileShieldThinProps>;
export default LanFileShieldThin;
