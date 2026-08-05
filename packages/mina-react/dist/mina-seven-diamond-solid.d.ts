import React from 'react';

export interface MinaSevenDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenDiamondSolid(props: MinaSevenDiamondSolidProps): React.ReactElement;
export default MinaSevenDiamondSolid;
