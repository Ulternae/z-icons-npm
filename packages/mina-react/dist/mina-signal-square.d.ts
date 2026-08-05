import React from 'react';

export interface MinaSignalSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalSquare(props: MinaSignalSquareProps): React.ReactElement;
export default MinaSignalSquare;
