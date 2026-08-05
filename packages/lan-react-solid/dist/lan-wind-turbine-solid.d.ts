import React from 'react';

export interface LanWindTurbineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindTurbineSolid(props: LanWindTurbineSolidProps): React.ReactElement;
export default LanWindTurbineSolid;
