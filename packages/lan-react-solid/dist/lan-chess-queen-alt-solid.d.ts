import React from 'react';

export interface LanChessQueenAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessQueenAltSolid(props: LanChessQueenAltSolidProps): React.ReactElement;
export default LanChessQueenAltSolid;
