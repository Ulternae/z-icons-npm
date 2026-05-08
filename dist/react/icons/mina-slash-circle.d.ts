import React from 'react';

export interface MinaSlashCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashCircle: React.FC<MinaSlashCircleProps>;
export default MinaSlashCircle;
