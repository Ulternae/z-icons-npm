import React from 'react';

export interface LanChessKnightAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKnightAltSolid(props: LanChessKnightAltSolidProps): React.ReactElement;
export default LanChessKnightAltSolid;
