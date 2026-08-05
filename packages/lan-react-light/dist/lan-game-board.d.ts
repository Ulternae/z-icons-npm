import React from 'react';

export interface LanGameBoardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameBoard(props: LanGameBoardProps): React.ReactElement;
export default LanGameBoard;
