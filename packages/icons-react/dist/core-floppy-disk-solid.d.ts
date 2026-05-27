import React from 'react';

export interface CoreFloppyDiskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFloppyDiskSolid: React.FC<CoreFloppyDiskSolidProps>;
export default CoreFloppyDiskSolid;
