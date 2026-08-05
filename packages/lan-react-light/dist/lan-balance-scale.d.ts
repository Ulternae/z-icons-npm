import React from 'react';

export interface LanBalanceScaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalanceScale(props: LanBalanceScaleProps): React.ReactElement;
export default LanBalanceScale;
