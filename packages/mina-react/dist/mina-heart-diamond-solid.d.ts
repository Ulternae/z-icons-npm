import React from 'react';

export interface MinaHeartDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartDiamondSolid(props: MinaHeartDiamondSolidProps): React.ReactElement;
export default MinaHeartDiamondSolid;
