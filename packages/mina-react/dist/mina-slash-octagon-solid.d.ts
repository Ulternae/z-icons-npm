import React from 'react';

export interface MinaSlashOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashOctagonSolid(props: MinaSlashOctagonSolidProps): React.ReactElement;
export default MinaSlashOctagonSolid;
