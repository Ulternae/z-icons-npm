import React from 'react';

export interface LanSlidersVSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersVSquare(props: LanSlidersVSquareProps): React.ReactElement;
export default LanSlidersVSquare;
