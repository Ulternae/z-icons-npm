import React from 'react';

export interface LanStarHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarHalfSolid(props: LanStarHalfSolidProps): React.ReactElement;
export default LanStarHalfSolid;
