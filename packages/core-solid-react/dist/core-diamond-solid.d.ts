import React from 'react';

export interface CoreDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDiamondSolid(props: CoreDiamondSolidProps): React.ReactElement;
export default CoreDiamondSolid;
