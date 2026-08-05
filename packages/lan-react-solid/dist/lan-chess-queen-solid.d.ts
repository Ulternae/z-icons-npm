import React from 'react';

export interface LanChessQueenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessQueenSolid(props: LanChessQueenSolidProps): React.ReactElement;
export default LanChessQueenSolid;
