import React from 'react';

export interface LanSquareThisWayUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareThisWayUpThin(props: LanSquareThisWayUpThinProps): React.ReactElement;
export default LanSquareThisWayUpThin;
