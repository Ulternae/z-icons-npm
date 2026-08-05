import React from 'react';

export interface MinaCodeDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeDiamondSolid(props: MinaCodeDiamondSolidProps): React.ReactElement;
export default MinaCodeDiamondSolid;
