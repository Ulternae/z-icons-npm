import React from 'react';

export interface LanArrowUpBigSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowUpBigSmall(props: LanArrowUpBigSmallProps): React.ReactElement;
export default LanArrowUpBigSmall;
