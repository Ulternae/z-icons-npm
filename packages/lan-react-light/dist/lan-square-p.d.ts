import React from 'react';

export interface LanSquarePProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareP(props: LanSquarePProps): React.ReactElement;
export default LanSquareP;
