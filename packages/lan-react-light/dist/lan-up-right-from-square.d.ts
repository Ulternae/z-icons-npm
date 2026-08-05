import React from 'react';

export interface LanUpRightFromSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpRightFromSquare(props: LanUpRightFromSquareProps): React.ReactElement;
export default LanUpRightFromSquare;
