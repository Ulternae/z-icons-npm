import React from 'react';

export interface LanTrafficLightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightSolid(props: LanTrafficLightSolidProps): React.ReactElement;
export default LanTrafficLightSolid;
