import React from 'react';

export interface LanSquareSmallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSmallSolid(props: LanSquareSmallSolidProps): React.ReactElement;
export default LanSquareSmallSolid;
