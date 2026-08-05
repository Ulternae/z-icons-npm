import React from 'react';

export interface MinaSlashCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashCircleSolid(props: MinaSlashCircleSolidProps): React.ReactElement;
export default MinaSlashCircleSolid;
