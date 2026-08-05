import React from 'react';

export interface LanSquareThisWayUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareThisWayUp(props: LanSquareThisWayUpProps): React.ReactElement;
export default LanSquareThisWayUp;
