import React from 'react';

export interface LanTrafficConeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficConeRegular(props: LanTrafficConeRegularProps): React.ReactElement;
export default LanTrafficConeRegular;
