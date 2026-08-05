import React from 'react';

export interface LanSquareSThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSThin(props: LanSquareSThinProps): React.ReactElement;
export default LanSquareSThin;
