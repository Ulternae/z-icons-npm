import React from 'react';

export interface LanSquareEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEqualsThin(props: LanSquareEqualsThinProps): React.ReactElement;
export default LanSquareEqualsThin;
