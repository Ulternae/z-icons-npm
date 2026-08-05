import React from 'react';

export interface LanStarSharpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarSharpSolid(props: LanStarSharpSolidProps): React.ReactElement;
export default LanStarSharpSolid;
