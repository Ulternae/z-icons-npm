import React from 'react';

export interface LanUserPilotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPilot: React.FC<LanUserPilotProps>;
export default LanUserPilot;
