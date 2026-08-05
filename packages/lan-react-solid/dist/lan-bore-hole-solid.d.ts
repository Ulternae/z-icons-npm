import React from 'react';

export interface LanBoreHoleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoreHoleSolid(props: LanBoreHoleSolidProps): React.ReactElement;
export default LanBoreHoleSolid;
