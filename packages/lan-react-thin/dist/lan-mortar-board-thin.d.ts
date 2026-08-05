import React from 'react';

export interface LanMortarBoardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMortarBoardThin(props: LanMortarBoardThinProps): React.ReactElement;
export default LanMortarBoardThin;
