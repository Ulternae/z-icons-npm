import React from 'react';

export interface LanGameBoardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameBoardThin(props: LanGameBoardThinProps): React.ReactElement;
export default LanGameBoardThin;
