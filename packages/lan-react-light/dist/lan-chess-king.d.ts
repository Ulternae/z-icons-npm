import React from 'react';

export interface LanChessKingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKing(props: LanChessKingProps): React.ReactElement;
export default LanChessKing;
