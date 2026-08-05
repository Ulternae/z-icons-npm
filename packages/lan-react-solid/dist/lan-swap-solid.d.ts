import React from 'react';

export interface LanSwapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwapSolid(props: LanSwapSolidProps): React.ReactElement;
export default LanSwapSolid;
