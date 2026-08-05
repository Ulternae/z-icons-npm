import React from 'react';

export interface LanTrafficLightGoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightGoSolid(props: LanTrafficLightGoSolidProps): React.ReactElement;
export default LanTrafficLightGoSolid;
