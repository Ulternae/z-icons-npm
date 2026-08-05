import React from 'react';

export interface LanTrafficLightStopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightStopThin(props: LanTrafficLightStopThinProps): React.ReactElement;
export default LanTrafficLightStopThin;
