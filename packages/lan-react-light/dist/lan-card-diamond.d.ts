import React from 'react';

export interface LanCardDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardDiamond(props: LanCardDiamondProps): React.ReactElement;
export default LanCardDiamond;
