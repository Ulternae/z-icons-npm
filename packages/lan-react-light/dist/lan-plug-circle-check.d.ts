import React from 'react';

export interface LanPlugCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleCheck(props: LanPlugCircleCheckProps): React.ReactElement;
export default LanPlugCircleCheck;
