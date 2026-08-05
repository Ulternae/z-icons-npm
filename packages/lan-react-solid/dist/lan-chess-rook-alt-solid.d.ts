import React from 'react';

export interface LanChessRookAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessRookAltSolid(props: LanChessRookAltSolidProps): React.ReactElement;
export default LanChessRookAltSolid;
