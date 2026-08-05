import React from 'react';

export interface LanSquareColonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareColonSolid(props: LanSquareColonSolidProps): React.ReactElement;
export default LanSquareColonSolid;
