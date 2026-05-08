import React from 'react';

export interface MinaSlashSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashSquareSolid: React.FC<MinaSlashSquareSolidProps>;
export default MinaSlashSquareSolid;
