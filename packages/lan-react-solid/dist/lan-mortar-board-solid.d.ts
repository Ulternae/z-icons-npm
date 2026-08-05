import React from 'react';

export interface LanMortarBoardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMortarBoardSolid(props: LanMortarBoardSolidProps): React.ReactElement;
export default LanMortarBoardSolid;
