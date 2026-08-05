import React from 'react';

export interface MinaSearchDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchDiamondSolid(props: MinaSearchDiamondSolidProps): React.ReactElement;
export default MinaSearchDiamondSolid;
