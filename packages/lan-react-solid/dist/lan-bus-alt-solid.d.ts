import React from 'react';

export interface LanBusAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusAltSolid(props: LanBusAltSolidProps): React.ReactElement;
export default LanBusAltSolid;
