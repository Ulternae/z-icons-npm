import React from 'react';

export interface MinaSlashSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashSquare(props: MinaSlashSquareProps): React.ReactElement;
export default MinaSlashSquare;
