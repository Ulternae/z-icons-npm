import React from 'react';

export interface LanDiamondHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondHalfThin(props: LanDiamondHalfThinProps): React.ReactElement;
export default LanDiamondHalfThin;
