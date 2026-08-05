import React from 'react';

export interface LanArrowsUpDownLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsUpDownLeftRight(props: LanArrowsUpDownLeftRightProps): React.ReactElement;
export default LanArrowsUpDownLeftRight;
