import React from 'react';

export interface MinaMusicDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicDiamondSolid(props: MinaMusicDiamondSolidProps): React.ReactElement;
export default MinaMusicDiamondSolid;
