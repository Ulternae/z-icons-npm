import React from 'react';

export interface LanChessQueenAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessQueenAltThin(props: LanChessQueenAltThinProps): React.ReactElement;
export default LanChessQueenAltThin;
