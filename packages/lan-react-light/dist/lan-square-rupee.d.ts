import React from 'react';

export interface LanSquareRupeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRupee(props: LanSquareRupeeProps): React.ReactElement;
export default LanSquareRupee;
