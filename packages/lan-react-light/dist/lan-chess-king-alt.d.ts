import React from 'react';

export interface LanChessKingAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKingAlt(props: LanChessKingAltProps): React.ReactElement;
export default LanChessKingAlt;
