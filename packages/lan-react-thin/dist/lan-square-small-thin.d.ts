import React from 'react';

export interface LanSquareSmallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSmallThin(props: LanSquareSmallThinProps): React.ReactElement;
export default LanSquareSmallThin;
