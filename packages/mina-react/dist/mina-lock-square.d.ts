import React from 'react';

export interface MinaLockSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockSquare(props: MinaLockSquareProps): React.ReactElement;
export default MinaLockSquare;
