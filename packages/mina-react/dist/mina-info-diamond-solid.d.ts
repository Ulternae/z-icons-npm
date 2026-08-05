import React from 'react';

export interface MinaInfoDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoDiamondSolid(props: MinaInfoDiamondSolidProps): React.ReactElement;
export default MinaInfoDiamondSolid;
