import React from 'react';

export interface MinaThreeDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeDiamondSolid(props: MinaThreeDiamondSolidProps): React.ReactElement;
export default MinaThreeDiamondSolid;
