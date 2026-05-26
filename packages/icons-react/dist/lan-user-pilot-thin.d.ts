import React from 'react';

export interface LanUserPilotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPilotThin: React.FC<LanUserPilotThinProps>;
export default LanUserPilotThin;
