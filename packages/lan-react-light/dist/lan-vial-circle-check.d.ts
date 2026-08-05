import React from 'react';

export interface LanVialCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialCircleCheck(props: LanVialCircleCheckProps): React.ReactElement;
export default LanVialCircleCheck;
