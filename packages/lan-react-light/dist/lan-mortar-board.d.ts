import React from 'react';

export interface LanMortarBoardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMortarBoard(props: LanMortarBoardProps): React.ReactElement;
export default LanMortarBoard;
