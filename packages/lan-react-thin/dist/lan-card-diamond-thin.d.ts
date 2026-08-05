import React from 'react';

export interface LanCardDiamondThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardDiamondThin(props: LanCardDiamondThinProps): React.ReactElement;
export default LanCardDiamondThin;
