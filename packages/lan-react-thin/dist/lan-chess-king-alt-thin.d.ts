import React from 'react';

export interface LanChessKingAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKingAltThin(props: LanChessKingAltThinProps): React.ReactElement;
export default LanChessKingAltThin;
