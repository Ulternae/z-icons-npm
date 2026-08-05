import React from 'react';

export interface LanSquareMillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMillThin(props: LanSquareMillThinProps): React.ReactElement;
export default LanSquareMillThin;
