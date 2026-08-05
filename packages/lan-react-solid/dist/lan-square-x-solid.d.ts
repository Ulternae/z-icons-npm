import React from 'react';

export interface LanSquareXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareXSolid(props: LanSquareXSolidProps): React.ReactElement;
export default LanSquareXSolid;
