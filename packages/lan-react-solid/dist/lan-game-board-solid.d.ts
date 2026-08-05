import React from 'react';

export interface LanGameBoardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameBoardSolid(props: LanGameBoardSolidProps): React.ReactElement;
export default LanGameBoardSolid;
