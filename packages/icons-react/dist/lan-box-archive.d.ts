import React from 'react';

export interface LanBoxArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxArchive: React.FC<LanBoxArchiveProps>;
export default LanBoxArchive;
