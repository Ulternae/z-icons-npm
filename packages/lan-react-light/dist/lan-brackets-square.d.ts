import React from 'react';

export interface LanBracketsSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBracketsSquare(props: LanBracketsSquareProps): React.ReactElement;
export default LanBracketsSquare;
