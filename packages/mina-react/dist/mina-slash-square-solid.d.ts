import React from 'react';

export interface MinaSlashSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashSquareSolid(props: MinaSlashSquareSolidProps): React.ReactElement;
export default MinaSlashSquareSolid;
