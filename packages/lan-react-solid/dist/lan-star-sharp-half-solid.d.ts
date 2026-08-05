import React from 'react';

export interface LanStarSharpHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarSharpHalfSolid(props: LanStarSharpHalfSolidProps): React.ReactElement;
export default LanStarSharpHalfSolid;
