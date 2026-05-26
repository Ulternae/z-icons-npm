import React from 'react';

export interface LanHeartPulseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartPulse: React.FC<LanHeartPulseProps>;
export default LanHeartPulse;
