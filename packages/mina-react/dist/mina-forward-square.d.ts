import React from 'react';

export interface MinaForwardSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardSquare(props: MinaForwardSquareProps): React.ReactElement;
export default MinaForwardSquare;
