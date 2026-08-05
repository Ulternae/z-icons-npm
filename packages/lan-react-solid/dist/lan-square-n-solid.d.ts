import React from 'react';

export interface LanSquareNSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNSolid(props: LanSquareNSolidProps): React.ReactElement;
export default LanSquareNSolid;
