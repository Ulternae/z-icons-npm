import React from 'react';

export interface LanFileCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleCheck(props: LanFileCircleCheckProps): React.ReactElement;
export default LanFileCircleCheck;
