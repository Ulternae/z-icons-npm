import React from 'react';

export interface LanChessKnightAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKnightAlt(props: LanChessKnightAltProps): React.ReactElement;
export default LanChessKnightAlt;
