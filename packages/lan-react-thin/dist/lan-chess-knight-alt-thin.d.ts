import React from 'react';

export interface LanChessKnightAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKnightAltThin(props: LanChessKnightAltThinProps): React.ReactElement;
export default LanChessKnightAltThin;
