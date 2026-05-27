import React from 'react';

export interface NeoBoxArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBoxArchive: React.FC<NeoBoxArchiveProps>;
export default NeoBoxArchive;
