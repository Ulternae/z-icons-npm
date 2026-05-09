import React from 'react';

export interface MinaSlashOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashOctagon: React.FC<MinaSlashOctagonProps>;
export default MinaSlashOctagon;
