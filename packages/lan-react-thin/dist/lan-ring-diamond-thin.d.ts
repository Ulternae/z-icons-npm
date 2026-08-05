import React from 'react';

export interface LanRingDiamondThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingDiamondThin(props: LanRingDiamondThinProps): React.ReactElement;
export default LanRingDiamondThin;
