import React from 'react';

export interface MinaHashDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashDiamondSolid(props: MinaHashDiamondSolidProps): React.ReactElement;
export default MinaHashDiamondSolid;
