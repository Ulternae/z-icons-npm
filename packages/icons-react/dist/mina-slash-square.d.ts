import React from 'react';

export interface MinaSlashSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashSquare: React.FC<MinaSlashSquareProps>;
export default MinaSlashSquare;
