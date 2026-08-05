import React from 'react';

export interface LanBalanceScaleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalanceScaleRight(props: LanBalanceScaleRightProps): React.ReactElement;
export default LanBalanceScaleRight;
