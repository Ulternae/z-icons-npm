import React from 'react';

export interface LanMemoCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoCircleCheck(props: LanMemoCircleCheckProps): React.ReactElement;
export default LanMemoCircleCheck;
