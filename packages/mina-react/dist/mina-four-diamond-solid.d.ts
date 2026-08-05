import React from 'react';

export interface MinaFourDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourDiamondSolid(props: MinaFourDiamondSolidProps): React.ReactElement;
export default MinaFourDiamondSolid;
