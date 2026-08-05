import React from 'react';

export interface LanGameBoardAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameBoardAltSolid(props: LanGameBoardAltSolidProps): React.ReactElement;
export default LanGameBoardAltSolid;
