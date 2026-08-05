import React from 'react';

export interface LanCircleRupeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRupee(props: LanCircleRupeeProps): React.ReactElement;
export default LanCircleRupee;
