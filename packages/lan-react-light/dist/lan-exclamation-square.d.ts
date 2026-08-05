import React from 'react';

export interface LanExclamationSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExclamationSquare(props: LanExclamationSquareProps): React.ReactElement;
export default LanExclamationSquare;
