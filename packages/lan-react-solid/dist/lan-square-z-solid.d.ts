import React from 'react';

export interface LanSquareZSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareZSolid(props: LanSquareZSolidProps): React.ReactElement;
export default LanSquareZSolid;
