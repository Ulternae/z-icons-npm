import React from 'react';

export interface LanShareAltSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareAltSquare(props: LanShareAltSquareProps): React.ReactElement;
export default LanShareAltSquare;
