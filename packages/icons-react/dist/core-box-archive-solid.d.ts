import React from 'react';

export interface CoreBoxArchiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBoxArchiveSolid: React.FC<CoreBoxArchiveSolidProps>;
export default CoreBoxArchiveSolid;
