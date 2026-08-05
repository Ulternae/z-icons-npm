import React from 'react';

export interface LanUpDownLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpDownLeftRight(props: LanUpDownLeftRightProps): React.ReactElement;
export default LanUpDownLeftRight;
