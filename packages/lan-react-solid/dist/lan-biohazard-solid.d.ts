import React from 'react';

export interface LanBiohazardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBiohazardSolid(props: LanBiohazardSolidProps): React.ReactElement;
export default LanBiohazardSolid;
