import React from 'react';

export interface LanChessKnightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKnightSolid(props: LanChessKnightSolidProps): React.ReactElement;
export default LanChessKnightSolid;
