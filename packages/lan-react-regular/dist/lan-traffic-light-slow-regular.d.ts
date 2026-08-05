import React from 'react';

export interface LanTrafficLightSlowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightSlowRegular(props: LanTrafficLightSlowRegularProps): React.ReactElement;
export default LanTrafficLightSlowRegular;
