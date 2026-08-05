import React from 'react';

export interface LanSquareLitecoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLitecoinSolid(props: LanSquareLitecoinSolidProps): React.ReactElement;
export default LanSquareLitecoinSolid;
