import React from 'react';

export interface MinaSlashDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashDiamond: React.FC<MinaSlashDiamondProps>;
export default MinaSlashDiamond;
