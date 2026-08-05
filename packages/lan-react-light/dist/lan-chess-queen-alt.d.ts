import React from 'react';

export interface LanChessQueenAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessQueenAlt(props: LanChessQueenAltProps): React.ReactElement;
export default LanChessQueenAlt;
