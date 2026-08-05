import React from 'react';

export interface LanSquareKipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKipSolid(props: LanSquareKipSolidProps): React.ReactElement;
export default LanSquareKipSolid;
