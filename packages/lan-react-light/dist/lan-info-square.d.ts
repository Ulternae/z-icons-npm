import React from 'react';

export interface LanInfoSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfoSquare(props: LanInfoSquareProps): React.ReactElement;
export default LanInfoSquare;
