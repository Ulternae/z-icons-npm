import React from 'react';

export interface LanTrafficLightSlowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightSlow(props: LanTrafficLightSlowProps): React.ReactElement;
export default LanTrafficLightSlow;
