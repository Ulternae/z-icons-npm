import React from 'react';

export interface LanTrafficLightGoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightGoThin(props: LanTrafficLightGoThinProps): React.ReactElement;
export default LanTrafficLightGoThin;
