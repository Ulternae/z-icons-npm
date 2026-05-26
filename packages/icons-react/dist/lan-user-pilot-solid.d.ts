import React from 'react';

export interface LanUserPilotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPilotSolid: React.FC<LanUserPilotSolidProps>;
export default LanUserPilotSolid;
