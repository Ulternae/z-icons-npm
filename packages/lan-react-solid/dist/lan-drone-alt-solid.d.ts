import React from 'react';

export interface LanDroneAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDroneAltSolid(props: LanDroneAltSolidProps): React.ReactElement;
export default LanDroneAltSolid;
