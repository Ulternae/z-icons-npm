import React from 'react';

export interface CoreBoxArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBoxArchive: React.FC<CoreBoxArchiveProps>;
export default CoreBoxArchive;
