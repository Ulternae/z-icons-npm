import React from 'react';

export interface LanTrafficLightStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightStop(props: LanTrafficLightStopProps): React.ReactElement;
export default LanTrafficLightStop;
