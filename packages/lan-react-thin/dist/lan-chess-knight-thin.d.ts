import React from 'react';

export interface LanChessKnightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKnightThin(props: LanChessKnightThinProps): React.ReactElement;
export default LanChessKnightThin;
