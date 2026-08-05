import React from 'react';

export interface LanSquareCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCodeSolid(props: LanSquareCodeSolidProps): React.ReactElement;
export default LanSquareCodeSolid;
