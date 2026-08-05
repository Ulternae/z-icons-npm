import React from 'react';

export interface LanSquareWonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareWon(props: LanSquareWonProps): React.ReactElement;
export default LanSquareWon;
