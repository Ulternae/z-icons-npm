import React from 'react';

export interface MinaDangerSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerSquare(props: MinaDangerSquareProps): React.ReactElement;
export default MinaDangerSquare;
