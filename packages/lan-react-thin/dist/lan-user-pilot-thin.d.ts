import React from 'react';

export interface LanUserPilotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPilotThin(props: LanUserPilotThinProps): React.ReactElement;
export default LanUserPilotThin;
