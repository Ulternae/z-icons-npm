import React from 'react';

export interface LanSlidersHSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersHSquare(props: LanSlidersHSquareProps): React.ReactElement;
export default LanSlidersHSquare;
