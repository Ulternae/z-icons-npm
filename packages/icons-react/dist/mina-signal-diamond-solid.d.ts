import React from 'react';

export interface MinaSignalDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalDiamondSolid: React.FC<MinaSignalDiamondSolidProps>;
export default MinaSignalDiamondSolid;
