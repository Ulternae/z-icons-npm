import React from 'react';

export interface LanChessQueenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessQueenThin(props: LanChessQueenThinProps): React.ReactElement;
export default LanChessQueenThin;
