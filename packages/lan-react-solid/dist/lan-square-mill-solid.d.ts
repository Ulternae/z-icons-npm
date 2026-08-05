import React from 'react';

export interface LanSquareMillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMillSolid(props: LanSquareMillSolidProps): React.ReactElement;
export default LanSquareMillSolid;
