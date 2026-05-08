import React from 'react';

export interface MinaSlashDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashDiamondSolid: React.FC<MinaSlashDiamondSolidProps>;
export default MinaSlashDiamondSolid;
