import React from 'react';

export interface MinaArchiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArchiveSolid: React.FC<MinaArchiveSolidProps>;
export default MinaArchiveSolid;
