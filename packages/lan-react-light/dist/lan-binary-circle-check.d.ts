import React from 'react';

export interface LanBinaryCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinaryCircleCheck(props: LanBinaryCircleCheckProps): React.ReactElement;
export default LanBinaryCircleCheck;
