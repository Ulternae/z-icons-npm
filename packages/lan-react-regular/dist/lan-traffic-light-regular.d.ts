import React from 'react';

export interface LanTrafficLightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightRegular(props: LanTrafficLightRegularProps): React.ReactElement;
export default LanTrafficLightRegular;
