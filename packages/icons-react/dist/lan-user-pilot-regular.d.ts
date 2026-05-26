import React from 'react';

export interface LanUserPilotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPilotRegular: React.FC<LanUserPilotRegularProps>;
export default LanUserPilotRegular;
