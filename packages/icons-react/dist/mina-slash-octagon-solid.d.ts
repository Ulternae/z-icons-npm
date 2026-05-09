import React from 'react';

export interface MinaSlashOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashOctagonSolid: React.FC<MinaSlashOctagonSolidProps>;
export default MinaSlashOctagonSolid;
