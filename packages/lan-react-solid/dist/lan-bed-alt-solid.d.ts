import React from 'react';

export interface LanBedAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedAltSolid(props: LanBedAltSolidProps): React.ReactElement;
export default LanBedAltSolid;
