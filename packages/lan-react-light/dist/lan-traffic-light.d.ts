import React from 'react';

export interface LanTrafficLightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLight(props: LanTrafficLightProps): React.ReactElement;
export default LanTrafficLight;
