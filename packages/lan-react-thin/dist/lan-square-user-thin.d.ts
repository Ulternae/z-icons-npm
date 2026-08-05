import React from 'react';

export interface LanSquareUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareUserThin(props: LanSquareUserThinProps): React.ReactElement;
export default LanSquareUserThin;
