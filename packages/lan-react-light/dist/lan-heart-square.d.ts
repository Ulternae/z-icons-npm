import React from 'react';

export interface LanHeartSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartSquare(props: LanHeartSquareProps): React.ReactElement;
export default LanHeartSquare;
