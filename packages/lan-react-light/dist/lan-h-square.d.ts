import React from 'react';

export interface LanHSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHSquare(props: LanHSquareProps): React.ReactElement;
export default LanHSquare;
