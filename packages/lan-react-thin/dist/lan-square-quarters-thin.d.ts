import React from 'react';

export interface LanSquareQuartersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQuartersThin(props: LanSquareQuartersThinProps): React.ReactElement;
export default LanSquareQuartersThin;
