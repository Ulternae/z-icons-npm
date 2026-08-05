import React from 'react';

export interface LanSquareNThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNThin(props: LanSquareNThinProps): React.ReactElement;
export default LanSquareNThin;
