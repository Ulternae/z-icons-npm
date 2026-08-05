import React from 'react';

export interface MinaNineDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineDiamondSolid(props: MinaNineDiamondSolidProps): React.ReactElement;
export default MinaNineDiamondSolid;
