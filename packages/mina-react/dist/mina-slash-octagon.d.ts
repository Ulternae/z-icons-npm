import React from 'react';

export interface MinaSlashOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashOctagon(props: MinaSlashOctagonProps): React.ReactElement;
export default MinaSlashOctagon;
