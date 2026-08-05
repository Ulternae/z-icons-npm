import React from 'react';

export interface LanChessKnightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKnight(props: LanChessKnightProps): React.ReactElement;
export default LanChessKnight;
