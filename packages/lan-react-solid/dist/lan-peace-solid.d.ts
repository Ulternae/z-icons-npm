import React from 'react';

export interface LanPeaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeaceSolid(props: LanPeaceSolidProps): React.ReactElement;
export default LanPeaceSolid;
