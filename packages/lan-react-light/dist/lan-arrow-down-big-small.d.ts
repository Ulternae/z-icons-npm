import React from 'react';

export interface LanArrowDownBigSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowDownBigSmall(props: LanArrowDownBigSmallProps): React.ReactElement;
export default LanArrowDownBigSmall;
