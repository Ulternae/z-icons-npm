import React from 'react';

export interface LanUserPilotTieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPilotTie: React.FC<LanUserPilotTieProps>;
export default LanUserPilotTie;
