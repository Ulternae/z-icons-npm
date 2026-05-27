import React from 'react';

export interface NeoBoxArchiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBoxArchiveSolid: React.FC<NeoBoxArchiveSolidProps>;
export default NeoBoxArchiveSolid;
