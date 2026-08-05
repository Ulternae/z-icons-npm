import React from 'react';

export interface LanChessBoardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessBoard(props: LanChessBoardProps): React.ReactElement;
export default LanChessBoard;
