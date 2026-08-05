import React from 'react';

export interface LanDiamondThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondThin(props: LanDiamondThinProps): React.ReactElement;
export default LanDiamondThin;
