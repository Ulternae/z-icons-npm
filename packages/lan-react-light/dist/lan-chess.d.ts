import React from 'react';

export interface LanChessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChess(props: LanChessProps): React.ReactElement;
export default LanChess;
