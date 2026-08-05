import React from 'react';

export interface MinaCheckDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckDiamondSolid(props: MinaCheckDiamondSolidProps): React.ReactElement;
export default MinaCheckDiamondSolid;
