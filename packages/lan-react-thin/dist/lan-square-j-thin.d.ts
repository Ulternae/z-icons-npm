import React from 'react';

export interface LanSquareJThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareJThin(props: LanSquareJThinProps): React.ReactElement;
export default LanSquareJThin;
