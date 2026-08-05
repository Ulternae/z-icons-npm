import React from 'react';

export interface MinaSignalDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalDiamondSolid(props: MinaSignalDiamondSolidProps): React.ReactElement;
export default MinaSignalDiamondSolid;
