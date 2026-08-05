import React from 'react';

export interface LanCardDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardDiamondSolid(props: LanCardDiamondSolidProps): React.ReactElement;
export default LanCardDiamondSolid;
