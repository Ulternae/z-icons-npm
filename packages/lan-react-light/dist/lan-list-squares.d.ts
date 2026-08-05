import React from 'react';

export interface LanListSquaresProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListSquares(props: LanListSquaresProps): React.ReactElement;
export default LanListSquares;
