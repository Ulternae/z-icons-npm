import React from 'react';

export interface LanSquareRootSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRootSolid(props: LanSquareRootSolidProps): React.ReactElement;
export default LanSquareRootSolid;
