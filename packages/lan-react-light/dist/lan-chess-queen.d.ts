import React from 'react';

export interface LanChessQueenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessQueen(props: LanChessQueenProps): React.ReactElement;
export default LanChessQueen;
