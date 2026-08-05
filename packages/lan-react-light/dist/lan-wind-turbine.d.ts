import React from 'react';

export interface LanWindTurbineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindTurbine(props: LanWindTurbineProps): React.ReactElement;
export default LanWindTurbine;
