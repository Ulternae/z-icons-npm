import React from 'react';

export interface LanSquareVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareVSolid(props: LanSquareVSolidProps): React.ReactElement;
export default LanSquareVSolid;
