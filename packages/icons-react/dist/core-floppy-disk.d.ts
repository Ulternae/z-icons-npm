import React from 'react';

export interface CoreFloppyDiskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFloppyDisk: React.FC<CoreFloppyDiskProps>;
export default CoreFloppyDisk;
