import React from 'react';

export interface LanSquareWonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareWonThin(props: LanSquareWonThinProps): React.ReactElement;
export default LanSquareWonThin;
