import React from 'react';

export interface MinaSlashCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashCircle(props: MinaSlashCircleProps): React.ReactElement;
export default MinaSlashCircle;
