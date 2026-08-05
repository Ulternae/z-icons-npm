import React from 'react';

export interface LanSquareListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareListSolid(props: LanSquareListSolidProps): React.ReactElement;
export default LanSquareListSolid;
