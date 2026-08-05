import React from 'react';

export interface LanTrafficLightGoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightGoRegular(props: LanTrafficLightGoRegularProps): React.ReactElement;
export default LanTrafficLightGoRegular;
