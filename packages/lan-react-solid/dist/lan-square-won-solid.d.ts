import React from 'react';

export interface LanSquareWonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareWonSolid(props: LanSquareWonSolidProps): React.ReactElement;
export default LanSquareWonSolid;
