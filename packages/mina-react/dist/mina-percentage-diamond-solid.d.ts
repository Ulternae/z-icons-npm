import React from 'react';

export interface MinaPercentageDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageDiamondSolid(props: MinaPercentageDiamondSolidProps): React.ReactElement;
export default MinaPercentageDiamondSolid;
