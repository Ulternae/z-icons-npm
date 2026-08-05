import React from 'react';

export interface LanTrafficLightSlowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightSlowSolid(props: LanTrafficLightSlowSolidProps): React.ReactElement;
export default LanTrafficLightSlowSolid;
