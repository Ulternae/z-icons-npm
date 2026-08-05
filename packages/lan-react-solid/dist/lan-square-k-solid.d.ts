import React from 'react';

export interface LanSquareKSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKSolid(props: LanSquareKSolidProps): React.ReactElement;
export default LanSquareKSolid;
