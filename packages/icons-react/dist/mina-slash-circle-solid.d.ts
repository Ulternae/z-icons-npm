import React from 'react';

export interface MinaSlashCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashCircleSolid: React.FC<MinaSlashCircleSolidProps>;
export default MinaSlashCircleSolid;
