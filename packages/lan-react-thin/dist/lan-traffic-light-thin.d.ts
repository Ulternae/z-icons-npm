import React from 'react';

export interface LanTrafficLightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightThin(props: LanTrafficLightThinProps): React.ReactElement;
export default LanTrafficLightThin;
