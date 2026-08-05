import React from 'react';

export interface LanSquareSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSmall(props: LanSquareSmallProps): React.ReactElement;
export default LanSquareSmall;
