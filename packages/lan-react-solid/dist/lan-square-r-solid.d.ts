import React from 'react';

export interface LanSquareRSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRSolid(props: LanSquareRSolidProps): React.ReactElement;
export default LanSquareRSolid;
