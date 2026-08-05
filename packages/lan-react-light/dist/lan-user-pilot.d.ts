import React from 'react';

export interface LanUserPilotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPilot(props: LanUserPilotProps): React.ReactElement;
export default LanUserPilot;
