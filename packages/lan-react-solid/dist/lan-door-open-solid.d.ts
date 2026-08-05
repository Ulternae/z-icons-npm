import React from 'react';

export interface LanDoorOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoorOpenSolid(props: LanDoorOpenSolidProps): React.ReactElement;
export default LanDoorOpenSolid;
