import React from 'react';

export interface LanUserPilotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPilotSolid(props: LanUserPilotSolidProps): React.ReactElement;
export default LanUserPilotSolid;
