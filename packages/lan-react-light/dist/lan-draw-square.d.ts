import React from 'react';

export interface LanDrawSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawSquare(props: LanDrawSquareProps): React.ReactElement;
export default LanDrawSquare;
