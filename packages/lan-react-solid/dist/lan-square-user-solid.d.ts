import React from 'react';

export interface LanSquareUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareUserSolid(props: LanSquareUserSolidProps): React.ReactElement;
export default LanSquareUserSolid;
