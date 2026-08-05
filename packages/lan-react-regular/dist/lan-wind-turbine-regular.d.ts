import React from 'react';

export interface LanWindTurbineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindTurbineRegular(props: LanWindTurbineRegularProps): React.ReactElement;
export default LanWindTurbineRegular;
