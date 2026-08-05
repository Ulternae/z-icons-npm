import React from 'react';

export interface LanChessRookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessRookSolid(props: LanChessRookSolidProps): React.ReactElement;
export default LanChessRookSolid;
