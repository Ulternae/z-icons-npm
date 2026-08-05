import React from 'react';

export interface LanSquareYSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareYSolid(props: LanSquareYSolidProps): React.ReactElement;
export default LanSquareYSolid;
