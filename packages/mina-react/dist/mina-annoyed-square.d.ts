import React from 'react';

export interface MinaAnnoyedSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAnnoyedSquare(props: MinaAnnoyedSquareProps): React.ReactElement;
export default MinaAnnoyedSquare;
