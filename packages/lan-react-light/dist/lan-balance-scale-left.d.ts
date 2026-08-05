import React from 'react';

export interface LanBalanceScaleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalanceScaleLeft(props: LanBalanceScaleLeftProps): React.ReactElement;
export default LanBalanceScaleLeft;
