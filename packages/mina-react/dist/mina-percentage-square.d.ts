import React from 'react';

export interface MinaPercentageSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageSquare(props: MinaPercentageSquareProps): React.ReactElement;
export default MinaPercentageSquare;
