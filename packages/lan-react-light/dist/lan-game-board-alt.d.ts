import React from 'react';

export interface LanGameBoardAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameBoardAlt(props: LanGameBoardAltProps): React.ReactElement;
export default LanGameBoardAlt;
