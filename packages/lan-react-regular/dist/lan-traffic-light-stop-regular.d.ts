import React from 'react';

export interface LanTrafficLightStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightStopRegular(props: LanTrafficLightStopRegularProps): React.ReactElement;
export default LanTrafficLightStopRegular;
