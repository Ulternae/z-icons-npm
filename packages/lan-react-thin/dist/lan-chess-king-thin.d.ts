import React from 'react';

export interface LanChessKingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKingThin(props: LanChessKingThinProps): React.ReactElement;
export default LanChessKingThin;
