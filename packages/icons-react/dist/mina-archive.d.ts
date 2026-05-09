import React from 'react';

export interface MinaArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArchive: React.FC<MinaArchiveProps>;
export default MinaArchive;
