import React from 'react';

export interface MinaYenDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenDiamondSolid(props: MinaYenDiamondSolidProps): React.ReactElement;
export default MinaYenDiamondSolid;
