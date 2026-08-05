import React from 'react';

export interface LanDiamondHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondHalfSolid(props: LanDiamondHalfSolidProps): React.ReactElement;
export default LanDiamondHalfSolid;
