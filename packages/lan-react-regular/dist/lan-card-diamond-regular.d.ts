import React from 'react';

export interface LanCardDiamondRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardDiamondRegular(props: LanCardDiamondRegularProps): React.ReactElement;
export default LanCardDiamondRegular;
