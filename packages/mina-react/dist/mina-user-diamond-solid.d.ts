import React from 'react';

export interface MinaUserDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserDiamondSolid(props: MinaUserDiamondSolidProps): React.ReactElement;
export default MinaUserDiamondSolid;
