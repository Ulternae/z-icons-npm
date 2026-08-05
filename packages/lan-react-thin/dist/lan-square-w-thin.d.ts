import React from 'react';

export interface LanSquareWThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareWThin(props: LanSquareWThinProps): React.ReactElement;
export default LanSquareWThin;
