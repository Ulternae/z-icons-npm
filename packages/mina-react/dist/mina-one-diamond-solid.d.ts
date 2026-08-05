import React from 'react';

export interface MinaOneDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneDiamondSolid(props: MinaOneDiamondSolidProps): React.ReactElement;
export default MinaOneDiamondSolid;
