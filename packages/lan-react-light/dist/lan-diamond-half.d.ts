import React from 'react';

export interface LanDiamondHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondHalf(props: LanDiamondHalfProps): React.ReactElement;
export default LanDiamondHalf;
