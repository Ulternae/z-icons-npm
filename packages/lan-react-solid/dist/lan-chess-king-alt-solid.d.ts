import React from 'react';

export interface LanChessKingAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKingAltSolid(props: LanChessKingAltSolidProps): React.ReactElement;
export default LanChessKingAltSolid;
