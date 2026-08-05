import React from 'react';

export interface LanTrafficLightStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightStopSolid(props: LanTrafficLightStopSolidProps): React.ReactElement;
export default LanTrafficLightStopSolid;
